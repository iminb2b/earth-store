import graphene
from graphene_django import DjangoObjectType
from products.models import Product, ProductType, User
from products.models import Review


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

    users = graphene.List(UserType)

    def resolve_users(self, info, **kwargs):
        return User.objects.all()

    product = graphene.Field(SingleProductType, slug=graphene.String())

    def resolve_product(root, info, slug):
        return Product.objects.filter(slug=slug).first()


schema = graphene.Schema(query=Query)
