# Generated by Django 5.0.7 on 2024-07-18 08:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0002_reviews_bookname'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Books',
            new_name='Book',
        ),
        migrations.RenameModel(
            old_name='Reviews',
            new_name='Review',
        ),
    ]