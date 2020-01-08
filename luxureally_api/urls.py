from django.urls import path

from .views import (foods, place_order, check_status, cancel_order)
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'food', views.FoodViewset)
router.register(r'restaurant', views.RestaurantViewset),
router.register(r'order', views.OrderViewset),
router.register(r'table', views.TableViewset),
router.register(r'addition', views.AdditionViewset),
router.register(r'user', views.UserViewset),
router.register(r'delivery', views.DeliveryViewset),
router.register(r'category', views.CategoryViewset)

urlpatterns = [
	path('foods/<int:restaurant_id>/', foods),
	path('place-order/', place_order),
	path('check-status/<int:order_id>/<str:order_type>', check_status),
	path('cancel-order/<int:order_id>', cancel_order),
]

urlpatterns += router.urls