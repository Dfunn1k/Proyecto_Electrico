from django.urls import path
from . import views
from .views import FileUploadView
from .views import LoginView
from .views import CalidadEnergia
from .views import UserGroupView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = 'app'
urlpatterns = [
    path('api/upload/', FileUploadView.as_view(), name='file_upload'),
    path('api/engines/', views.EngineView.as_view() , name='engines'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/calidad_energia/', CalidadEnergia.as_view(), name='calidad_energia'),
    path('api/permisos/', UserGroupView.as_view(), name='permisos')
]