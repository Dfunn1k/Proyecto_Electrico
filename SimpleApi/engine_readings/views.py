from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .models import Engine, Reading
from .serializers import EngineSerializer
from rest_framework.generics import ListAPIView
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
#login
from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer
#csrf
#from django.views.decorators.csrf import csrf_exempt



#
import pandas as pd
from django_pandas.io import read_frame

def read_and_store_data(file):
    df = pd.read_excel(file, sheet_name='Sheet1')

    # Iterar sobre las filas del DataFrame
    for index, row in df.iterrows():
        # Buscar o crear el objeto Engine
        engine, _ = Engine.objects.get_or_create(name='JoseMotors')

        # Crear y guardar el objeto Reading
        reading = Reading(MagV1=row['MagV1'],MagV2=row['MagV2'],MagV3=row['MagV3'],engine=engine)
        reading.save()


# Create your views here.

class EngineView(ListAPIView):
    queryset = Engine.objects.all()
    serializer_class = EngineSerializer


class FileUploadView(APIView):
    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):
        if 'file' not in request.data:
            return Response({'error': 'No file provided'}, status=status.HTTP_400_BAD_REQUEST)

        file = request.data['file']
        read_and_store_data(file)
        return Response({'status': 'success'}, status=status.HTTP_200_OK)

class LoginView(APIView):
    #@csrf_exempt
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'detail': 'Inicio de sesión exitoso.'})
        else:
            return Response({'error': 'Nombre de usuario o contraseña incorrectos.'}, status=status.HTTP_400_BAD_REQUEST)
        

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer