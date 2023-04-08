from rest_framework import permissions

class IsMemberOfGroupAnalisis(permissions.BasePermission):
    def has_permission(self, request, view):
        # Obtenemos el nombre del grupo desde la vista
        group_name = 'Analisis de motor'
        # Comprobamos si el usuario está en el grupo
        return request.user.groups.filter(name=group_name).exists()
    

class IsMemberOfGroupCalidad(permissions.BasePermission):
    def has_permission(self, request, view):
        # Obtenemos el nombre del grupo desde la vista
        group_name = 'calidad de energia'
        # Comprobamos si el usuario está en el grupo
        return request.user.groups.filter(name=group_name).exists()