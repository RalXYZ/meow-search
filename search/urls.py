from django.urls import path
from . import views

urlpatterns = [
    path('article/<int:article_id>/', views.article, name='article'),
    path('search/', views.search, name='search'),
    path('', views.homepage, name='homepage'),
]
