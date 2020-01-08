from rest_framework import serializers
from .models import User, Restaurant, Table, Order, Delivery, Food, Category, Addition


class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = '__all__'


class RestaurantSerializer(serializers.ModelSerializer):
	class Meta:
		model = Restaurant
		fields = '__all__'


class TableSerializer(serializers.ModelSerializer):
	class Meta:
		model = Table
		fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
	class Meta:
		model = Order
		fields = '__all__'


class DeliverySerializer(serializers.ModelSerializer):
	class Meta:
		model = Delivery
		fields = '__all__'


class AdditionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Addition
		fields = '__all__'


class FoodSerializer(serializers.ModelSerializer):
	class Meta:
		model = Food
		fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = '__all__'