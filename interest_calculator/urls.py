from django.urls import path
from .views import CalculateAPI

urlpatterns = [
    path('calculate/', CalculateAPI.as_view(), name="calculate"),
]
