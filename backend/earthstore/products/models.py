from django.db import models


# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=100)
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
