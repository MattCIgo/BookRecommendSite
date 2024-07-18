from rest_framework import serializers
from .models import Book, Review

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'name', 'synopsis']


class ReviewSerializer(serializers.ModelSerializer):   
    class Meta:
        model = Review
        fields = ['id', 'book', 'username', 'body']