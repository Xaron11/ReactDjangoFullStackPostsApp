from django.contrib import admin
from .models import Article
from rest_framework.authtoken.admin import TokenAdmin


# Register your models here.


# admin.site.register(Article)

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_filter = ['title']
    list_display = ('title', 'description')


TokenAdmin.raw_id_fields = ['user']
