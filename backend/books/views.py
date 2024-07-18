from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Book, Review 
from .serializers import BookSerializer, ReviewSerializer

# Returns all the books in the database
@api_view(['GET'])
def book_list(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)

    return JsonResponse(serializer.data, safe=False)


# Returns the Reviews of a certain book
@api_view(['POST'])
def review_list(request):
    bookName = request.data['book']
    print(bookName)

    reviews = Review.objects.filter(book__name=bookName)
    serializer = ReviewSerializer(reviews, many=True)

    return JsonResponse(serializer.data, safe=False)