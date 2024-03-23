import graphene
from graphene_django import DjangoObjectType
from products.models import Product, ProductType, User, Cart
from products.models import Review


class CartType(DjangoObjectType):
    class Meta:
        model = Cart
        fields = "__all__"


class ProductsType(DjangoObjectType):
    class Meta:
        model = Product
        interfaces = (graphene.relay.Node,)
        fields = "__all__"


class SingleProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = "__all__"


class ProductsConnection(graphene.relay.Connection):
    class Meta:
        node = ProductsType


class ReviewsType(DjangoObjectType):
    class Meta:
        model = Review
        fields = "__all__"


class ProductTypeType(DjangoObjectType):
    class Meta:
        model = ProductType
        fields = "__all__"


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = "__all__"


class Query(graphene.ObjectType):
    """
    Queries for the Products model
    """

    productTypes = graphene.List(ProductsType)

    def resolve_productTypes(self, info, **kwargs):
        return ProductType.objects.all()

    products = graphene.relay.ConnectionField(ProductsConnection)

    def resolve_products(self, info, **kwargs):
        return Product.objects.all()

    reviews = graphene.List(ReviewsType)

    def resolve_reviews(self, info, **kwargs):
        return Review.objects.all()

    reviews_by_product = graphene.List(ReviewsType, productId=graphene.String())

    def resolve_reviews_by_product(self, info, productId):
        return Review.objects.filter(product_id=productId)

    users = graphene.List(UserType)

    def resolve_users(self, info, **kwargs):
        return User.objects.all()

    cart = graphene.List(CartType, username=graphene.String())

    def resolve_cart(root, info, username):
        user = User.objects.filter(username=username).first()
        return Cart.objects.filter(user=user)

    product = graphene.Field(SingleProductType, slug=graphene.String())

    def resolve_product(root, info, slug):
        return Product.objects.filter(slug=slug).first()


class CreateReview(graphene.Mutation):
    class Arguments:
        email = graphene.String()
        message = graphene.String()
        productSlug = graphene.String()

    success = graphene.Boolean()
    review = graphene.Field(ReviewsType)

    def mutate(self, info, email, message, productSlug):
        product = Product.objects.filter(slug=productSlug).first()
        user = User.objects.filter(username=email).first()
        if user is None:
            user = User(username=email, image="")
            user.save()

        review = Review(user=user, description=message, product=product)
        review.save()

        return CreateReview(success=True)


class CreateCart(graphene.Mutation):
    class Arguments:
        username = graphene.String()
        productSlug = graphene.String()
        count = graphene.Int()

    success = graphene.Boolean()
    cart = graphene.Field(CartType)

    def mutate(self, info, username, productSlug, count):
        product = Product.objects.filter(slug=productSlug).first()
        user = User.objects.filter(username=username).first()

        if Cart.objects.filter(product=product).first():
            duplicate = Cart.objects.get(product=product)
            duplicate.count = duplicate.count + count
            duplicate.save()
        else:
            cart = Cart(user=user, product=product, count=count)
            cart.save()

        return CreateCart(success=True)


class Mutation(graphene.ObjectType):
    create_review = CreateReview.Field()
    create_cart = CreateCart.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
