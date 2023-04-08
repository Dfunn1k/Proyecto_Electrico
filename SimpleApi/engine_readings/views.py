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
#permisos
from .permissions import IsMemberOfGroupAnalisis, IsMemberOfGroupCalidad
from rest_framework import permissions
#
from django.contrib.auth.models import User, Group



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
    permission_classes = [permissions.IsAuthenticated, IsMemberOfGroupAnalisis]
    queryset = Engine.objects.all()
    serializer_class = EngineSerializer


class FileUploadView(APIView):
    permission_classes = [permissions.IsAuthenticated, IsMemberOfGroupAnalisis]
    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):
        if 'file' not in request.data:
            return Response({'error': 'No file provided'}, status=status.HTTP_400_BAD_REQUEST)

        file = request.data['file']
        read_and_store_data(file)
        return Response({'status': 'success'}, status=status.HTTP_200_OK)

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'detail': 'Inicio de sesión exitoso.'})
        else:
            return Response({'error': 'Nombre de usuario o contraseña incorrectos.'}, status=status.HTTP_400_BAD_REQUEST)


class CalidadEnergia(APIView):
    permission_classes = [permissions.IsAuthenticated, IsMemberOfGroupCalidad]
    def get(self, request):
        return Response({'detail': 'Este usuario tiene permisos para calidad de energia'})


class UserGroupView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, username):
        user = User.objects.get(username=username)
        group = user.groups.first()
        return Response({'group': group.name})