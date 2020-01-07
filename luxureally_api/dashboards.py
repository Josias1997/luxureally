from controlcenter import Dashboard, widgets
from .models import Order, Restaurant, User, Food, Table, Category, Addition

class OrderList(widgets.ItemList):
    model = Order
    list_display = ('table', 'total_price', 'status', 'order_details', 'created_at')

class MyDashboard(Dashboard):
    widgets = (
        OrderList,
    )