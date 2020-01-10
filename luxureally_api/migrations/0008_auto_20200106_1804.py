# Generated by Django 3.0.1 on 2020-01-06 17:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('luxureally_api', '0007_auto_20200106_1706'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='delivery',
            name='order',
        ),
        migrations.RemoveField(
            model_name='order',
            name='order_type',
        ),
        migrations.AddField(
            model_name='delivery',
            name='order_details',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='delivery',
            name='restaurant',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='deliveries', to='luxureally_api.Restaurant'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='delivery',
            name='status',
            field=models.CharField(choices=[('PENDING ORDER', 'PENDING ORDER'), ('ORDER TREATED', 'ORDER TREATED'), ('ORDER DELIVERED', 'ORDER DELIVERED')], default='PENDING ORDER', max_length=50),
        ),
    ]