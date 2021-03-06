# Generated by Django 3.0.1 on 2020-01-03 20:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('luxureally_api', '0004_delivery'),
    ]

    operations = [
        migrations.CreateModel(
            name='Addition',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_price', models.DecimalField(decimal_places=2, max_digits=9)),
                ('restaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='additions', to='luxureally_api.Restaurant')),
                ('table', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='additions', to='luxureally_api.Table')),
            ],
        ),
    ]
