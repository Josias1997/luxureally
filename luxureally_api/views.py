from django.http import Http404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from .models import User, Restaurant, Category, Food, Order, Table, OrderItem, Addition, Delivery
from django.db.models.signals import post_save
from django.dispatch import receiver
from . import serializers
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

# Create your views here.


@api_view(['GET'])
def foods(request, restaurant_id):
	categories_details = []
	categories = Category.objects.filter(restaurant__id=restaurant_id)
	for category in categories:
		category_details = {
			'id': category.id,
			'title': category.title,
			'image': category.image.url
		}
		foods_details = []
		for food in Food.objects.filter(category__id=category.id, is_active=True):
			food_details = {
				'id': food.id,
				'title': food.title,
				'picture': food.picture.url,
				'description': food.description,
				'price': food.price,
			}
			foods_details.append(food_details)
		category_details['foods'] = foods_details
		categories_details.append(category_details)
	return Response({
		'infos': categories_details
	})


@api_view(['POST'])
def place_order(request):
	order = None
	details = request.data['details'].split(',')
	notes = request.data['notes']
	total_price = request.data['total_price']
	order_type = request.data['type']
	if order_type == 'on-place':
		table_id = int(request.data['table'])
		table = None
		if Table.objects.filter(id=table_id).exists():
			table = Table.objects.get(id=table_id)
		order = Order(table=table, restaurant=table.restaurant, total_price=total_price, order_details=notes)
		order.save()
		for i in range(0, len(details), 2):
			if (i + 1) < len(details):
				food_id = details[i]
				quantity = details[i+1]
				food = Food.objects.get(id=food_id)
				order_item = OrderItem(food=food, quantity=quantity, order=order)
				order_item.save()
	elif order_type == 'delivery':
		first_name = request.data['first_name']
		last_name = request.data['last_name']
		email = request.data['email']
		phone_number = request.data['phone_number']
		address = request.data['address']
		restaurant_id = int(request.data['restaurant'])
		restaurant = None
		if Restaurant.objects.filter(id=restaurant_id).exists():
			restaurant = Restaurant.objects.get(id=restaurant_id)
		order = Delivery(restaurant=restaurant, first_name=first_name, last_name=last_name,
			email=email, phone_number=phone_number, address=address, total_price=total_price)
		order.save()
	return Response ({
		'id': order.id,
		'price': order.total_price,
		'status': order.status,
	})


@api_view(['GET'])
def check_status(request, order_id, order_type):
	if Order.objects.filter(id=order_id).exists() or Delivery.objects.filter(id=order_id).exists():
		order = None
		if order_type == 'on-place':
			order = Order.objects.get(id=order_id)
		elif order_type == 'delivery':
			order = Delivery.objects.get(id=order_id)
		return Response ({
			'id': order.id,
			'price': order.total_price,
			'status': order.status
		})
	else:
		raise Http404('Order not found')


@api_view(['DELETE'])
def cancel_order(request, order_id):
	if Order.objects.filter(id=order_id).exists():
		order = Order.objects.get(id=order_id)
		order.delete()
		return Response ({
			'id': order_id,
		})
	else:
		raise Http404('Order not found')


# API Viewsets
class RestaurantViewset(viewsets.ModelViewSet):
	queryset = Restaurant.objects.all()
	serializer_class = serializers.RestaurantSerializer


class TableViewset(viewsets.ModelViewSet):
	queryset = Table.objects.all()
	serializer_class = serializers.TableSerializer


class OrderViewset(viewsets.ModelViewSet):
	queryset = Order.objects.all()
	serializer_class = serializers.OrderSerializer


class AdditionViewset(viewsets.ModelViewSet):
	queryset = Addition.objects.all()
	serializer_class = serializers.AdditionSerializer


class DeliveryViewset(viewsets.ModelViewSet):
	queryset = Delivery.objects.all()
	serializer_class = serializers.DeliverySerializer


class FoodViewset(viewsets.ModelViewSet):
	queryset = Food.objects.all()
	serializer_class = serializers.FoodSerializer


class UserViewset(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = serializers.UserSerializer


class CategoryViewset(viewsets.ModelViewSet):
	queryset = Category.objects.all()
	serializer_class = serializers.CategorySerializer



def send_notification(event):
	data = event['data']
	async_to_sync(get_channel_layer().send)(text_data=json.dumps(
		data
	))



@receiver(post_save, sender=Addition)
def delete_orders_if_addition_is_paid(sender, instance, created, **kwargs):
	if instance.status == 'PAID':
		print(instance.status)
		table_id = instance.table.id
		orders = Order.objects.filter(table__id=table_id)
		for order in orders:
			order.delete()




@receiver(post_save, sender=Order)
def send_push_notification(sender, instance, **kwargs):
	if created:
		group_name = 'updates'
		message = {
			'id': instance.id,
			'price': str(instance.total_price),
			'table': instance.table.number,
			'status': instance.status,
		}
		async_to_sync(get_channel_layer().group_send)(
			group_name,
			{
				'type': 'send_message',
				'data': message
			}
		)


@receiver(post_save, sender=Delivery)
def send_push_notification(sender, instance, created, **kwargs):
	if created:
		group_name = 'updates'
		message = {
			'id': instance.id,
			'price': str(instance.total_price),
			'user': instance.first_name + ' ' + instance.last_name,
			'status': instance.status,
		}
		async_to_sync(get_channel_layer().group_send)(
			group_name,
			{
				'type': 'send_message',
				'data': message
			}
		)