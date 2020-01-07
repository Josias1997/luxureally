from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

PENDING_ORDER = 'PENDING ORDER'
ORDER_PROCESSED = 'ORDER TREATED'
ORDER_DELIVERED = 'ORDER DELIVERED'

STATUS_CHOICES = [
    (PENDING_ORDER, 'PENDING ORDER'),
    (ORDER_PROCESSED, 'ORDER TREATED'),
    (ORDER_DELIVERED, 'ORDER DELIVERED')
]

class Restaurant(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    def all_categories(self):
        return ", ".join([category.title for category in self.categories.all()])

    def all_tables(self):
        return ", ".join([str(table.number) for table in self.tables.all()])


class User(AbstractUser):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='users', null=True, blank=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class Table(models.Model):
    number = models.IntegerField()
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='tables')

    def __str__(self):
        return f'Table number {self.number}'


class Category(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='categories/pictures/', blank=True, null=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='categories')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Food(models.Model):
    title = models.CharField(max_length=100)
    picture = models.ImageField(upload_to='foods/pictures/')
    description = models.TextField()
    price = models.DecimalField(max_digits=9, decimal_places=2)
    is_active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='foods')

    def __str__(self):
        return self.title


class Order(models.Model):
    table = models.ForeignKey(Table, on_delete=models.CASCADE, related_name='orders')
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='orders')
    total_price = models.DecimalField(max_digits=9, decimal_places=2, default=0)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default=PENDING_ORDER)
    order_details = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Ordered from table number {self.table.number} - Price: {self.total_price}'


class OrderItem(models.Model):
    food = models.ForeignKey(Food, on_delete=models.CASCADE, related_name='order_items');
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    quantity = models.IntegerField()

    def __str__(self):
        return f'{self.food.title} - {self.quantity}'


class Delivery(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='deliveries')
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    total_price = models.DecimalField(max_digits=9, decimal_places=2, default=0)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default=PENDING_ORDER)
    order_details = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class Addition(models.Model):
    table = models.ForeignKey(Table, on_delete=models.CASCADE, related_name='additions')
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='additions')
    total_price = models.DecimalField(max_digits=9, decimal_places=2)
    status = models.CharField(max_length=20, choices=[
        ('NON PAID', 'NON PAID'),
        ('PAID', 'PAID')], default='NON PAID')

    def __str__(self):
        return f"Addition from table number {self.table.number}"
