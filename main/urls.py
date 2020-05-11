from django.urls import path
from django.conf.urls import url
from . import views
from django.contrib.auth import views as auth_views
from .views import (
    MembershipSelectView,
    PaymentView,
    updateTransactionRecords,
    cancelSubscription
)

urlpatterns = [
    path('',views.index,name='index'),
    path('blog',views.blog,name='blog'),
    path('privacy',views.privacy,name='privacy'),
    path('terms_and_conditions',views.terms_and_conditions,name='terms_and_conditions'),
    path('calendar',views.calendar,name='calendar'),
    path('dashboard',views.dashboard,name='dashboard'),
    path('create/', views.dashboard , name='create_income_record'),
    path('create_item/', views.lists , name='create_item_record'),
    path('add_list/', views.add_list , name='add_list_record'),
    path('create_exp/', views.dashboard , name='create_expence_record'),
    path('create_cat/', views.dashboard , name='create_category_record'),
    path('create_goal/', views.dashboard , name='create_goal_record'),
    path('update_budget/', views.update_budget , name='update_budget'),
    path('personalization/', views.personalization , name='personalization'),
    path('update_username/', views.personalization , name='update_username_record'),
    path('update_language/', views.personalization , name='update_language_record'),
    path('update_color/', views.personalization , name='update_color_record'),
    path('update_theme/', views.personalization , name='update_theme_record'),
    path('list_as_expence/', views.dashboard , name='list_as_expence'),
    path('password_reset/', auth_views.PasswordResetView.as_view(template_name='passwords/password_reset_form.html',email_template_name='passwords/password_reset_email.html',subject_template_name='passwords/password_reset_subject.txt'), name='password_reset'),
    path('password_reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='passwords/password_reset_done.html'),name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='passwords/password_reset_confirm.html'), name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='passwords/password_reset_complete.html'),name='password_reset_complete'),
    path('goals',views.goals,name='goals'),
    path('login',views.login,name='login'),
    path('lists',views.lists,name='lists'),
    path('registration',views.registration,name='registration'),
    path('settings',views.settings,name='settings'),
    path('<int:blo_id>', views.blogext, name='blogext'),
    path('logout',views.logout,name='logout'),
    url(r'^delete/(?P<id>\d+)/$', view=views.income_delete, name='delete_income_record'),
    url(r'^delete_item/(?P<id>\d+)/$', view=views.item_delete, name='delete_item_record'),
    url(r'^delete_list/(?P<id>\d+)/$', view=views.list_delete, name='delete_list_record'),
    url(r'^delete_c/(?P<id>\d+)/$', view=views.category_delete, name='delete_category_record'),
    url(r'^delete_goal/(?P<id>\d+)/$', view=views.goal_delete, name='delete_goal_record'),
    url(r'^delete_exp/(?P<id>\d+)/$', view=views.expence_delete, name='delete_expence_record'),
    path('select_memberships', MembershipSelectView.as_view(), name='select'),
    path('payment/', PaymentView, name='payment'),
    path('update-transactions/<subscription_id>/',updateTransactionRecords, name='update-transactions'),
    path('cancel/', cancelSubscription, name='cancel'),
    url(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',views.activate, name='activate'),
]
  
