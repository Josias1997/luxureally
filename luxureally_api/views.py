from django.http import Http404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Category, Food, Order, Table, OrderItem, Addition
from django.db.models.signals import post_save
from django.dispatch import receiver

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
	table_id = int(request.data['table'])
	table = None
	if Table.objects.filter(id=table_id).exists():
		table = Table.objects.get(id=table_id)
	details = request.data['details'].split(',')
	notes = request.data['notes']
	total_price = request.data['total_price']
	order = Order(table=table, restaurant=table.restaurant, total_price=total_price, order_details=notes)
	order.save()
	for i in range(0, len(details), 2):
		if (i + 1) < len(details):
			food_id = details[i]
			quantity = details[i+1]
			food = Food.objects.get(id=food_id)
			order_item = OrderItem(food=food, quantity=quantity, order=order)
			order_item.save()
	return Response ({
		'id': order.id,
		'price': order.total_price,
		'status': order.status,
	})


@api_view(['GET'])
def check_status(request, order_id):
	if Order.objects.filter(id=order_id).exists():
		order = Order.objects.get(id=order_id)
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


@api_view(['POST'])
def ask_for_addition(request):
	table_id = request.data['table_id']
	table = None
	if Table.objects.filter(id=table_id).exists():
		table = Table.objects.get(id=table_id)
	total_price = request.data['total_price']
	addition = Addition(table=table, restaurant=table.restaurant, total_price=total_price)
	addition.save()
	return Response({
		'message': 'OK',
	})


@receiver(post_save, sender=Addition)
def delete_orders_if_addition_is_paid(sender, instance, created, **kwargs):
	if instance.status == 'PAID':
		print(instance.status)
		table_id = instance.table.id
		orders = Order.objects.filter(table__id=table_id)
		for order in orders:
			order.delete()
