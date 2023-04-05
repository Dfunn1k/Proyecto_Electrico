from django.urls import path
from . import views
from .views import FileUploadView
from .views import LoginView
from .views import MyTokenObtainPairView

app_name = 'app'
urlpatterns = [
    path('upload/', FileUploadView.as_view(), name='file_upload'),
    path('engines/', views.EngineView.as_view() , name='engines'),
    path('login/', LoginView.as_view(), name='login'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]