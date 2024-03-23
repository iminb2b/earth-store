from django.db import models


# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=100, unique=True)
    image = models.TextField(
        null=True,
    )

    def __str__(self):
        return self.username


class ProductType(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100)
    type = models.ForeignKey(ProductType, null=True, on_delete=models.CASCADE)
    slug = models.SlugField(null=True, blank=True)
    price = models.FloatField(
        null=True,
    )
    image = models.TextField(
        null=True,
    )
    introduction = models.TextField(
        null=True,
    )
    description = models.TextField(
        null=True,
    )

    def __str__(self):
        return self.name


class Review(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)

    description = models.TextField(
        null=True,
    )
    product = models.ForeignKey(Product, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.product.name


class Cart(models.Model):
    count = models.PositiveIntegerField(null=True, blank=True)
    product = models.ForeignKey(Product, null=True, on_delete=models.CASCADE)
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.product.name}  |  {self.count} "
