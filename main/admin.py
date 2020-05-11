from django.contrib import admin
from django.conf import settings




from .models import Membership, UserMembership, Subscription , Goals  ,Blog,Income,Expence,Category,List,ListsItem,AllowedMembership,Languages
if settings.DEBUG == True:
    admin.site.register(Languages)
    admin.site.register(List)
    admin.site.register(AllowedMembership)
    admin.site.register(ListsItem)
    admin.site.register(Membership)
    admin.site.register(UserMembership)
    admin.site.register(Subscription)
    admin.site.register(Goals)
    admin.site.register(Blog)
    admin.site.register(Income)
    admin.site.register(Expence)
    admin.site.register(Category)
