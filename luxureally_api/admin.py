from django.contrib.admin import ModelAdmin, register, TabularInline
from .models import User, Restaurant, Category, Food, Table, Order, OrderItem, Addition, Delivery

# Register your models here.


class UserInline(TabularInline):
    model = User


@register(User)
class UserAdmin(ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'password')
    list_display_links = ('first_name', 'last_name')
    list_editable = ('email',)
    search_fields = ['first_name', 'last_name', 'email']


@register(Restaurant)
class RestaurantAdmin(ModelAdmin):
    list_display = ('name', 'all_categories', 'all_tables')
    ordering = ['name']
    search_fields = ['name']


@register(Category)
class CategoryAdmin(ModelAdmin):
    list_display = ('title', 'restaurant', 'created_at')
    ordering = ['title']
    search_fields = ['title', 'created_at', 'restaurant']


@register(Food)
class FoodAdmin(ModelAdmin):
    list_display = ('title', 'price', 'picture', 'is_active', 'category', 'created_at')
    list_editable = ('price', 'picture', 'category')
    ordering = ['title']
    search_fields = ['title', 'price', 'is_active', 'created_at']


class OrderInline(TabularInline):
    model = Order


@register(Table)
class TableAdmin(ModelAdmin):
    list_display = ('number', 'restaurant')
    list_editable = ('restaurant',)
    ordering = ['number']
    search_fields = ['number', 'restaurant']


class OrderItemInline(TabularInline):
    model = OrderItem


@register(Order)
class OrderAdmin(ModelAdmin):
    list_display = ('table', 'total_price', 'order_details', 'created_at', 'status')
    list_editable = ('status',)
    search_fields = ['foods', 'table', 'status', 'created_at']
    inlines = [
        OrderItemInline
    ]


@register(Addition)
class AdditionAdmin(ModelAdmin):
    list_display = ('table', 'restaurant', 'total_price', 'status')
    list_editable = ('status', )
    search_fields = ('table', 'total_price')


@register(Delivery)
class DeliveryAdmin(ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'restaurant', 'total_price', 'status', 'address')
    list_editable = ('status', )
    search_fields = ('restaurant', 'first_name', 'last_name', 'email', 'status')

