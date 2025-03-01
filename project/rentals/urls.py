from django.urls import path
from .views import BookingListCreateAPIView, BookingRetrieveUpdateDestroyAPIView


urlpatterns = [
    path('rentals/', BookingListCreateAPIView.as_view(), name='rentals-list-create'),
    path('rentals/<int:pk>/', BookingRetrieveUpdateDestroyAPIView.as_view(), name='rentals-retrieve-update-destroy')
]
