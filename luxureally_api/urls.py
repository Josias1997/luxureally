from django.urls import path

from .views import (foods, place_order, check_status, cancel_order, ask_for_addition, restaurants, send_push)

urlpatterns = [
	path('foods/<int:restaurant_id>/', foods),
	path('place-order/', place_order),
	path('check-status/<int:order_id>/<str:order_type>', check_status),
	path('cancel-order/<int:order_id>', cancel_order),
	path('addition/', ask_for_addition),
	path('restaurants/', restaurants),
	path('send-push/', send_push)
]