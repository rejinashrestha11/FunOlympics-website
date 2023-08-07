from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from . import views

urlpatterns = [
    
    path('', views.index, name = "index"),
    path('about', views.about, name = "about"),
    path('register', views.register, name = "register"),
    path('success', views.success, name = "success"),
    path('loginn', views.loginn, name = "loginn"),
    path('contact', views.contact, name = "contact"),
    path('schedule', views.schedule, name = "schedule"),
    path('team', views.team, name = "team"),
    path('blog', views.blog, name = "blog"),
    path('basketball', views.basketball, name = "basketball"),
    path('members', views.members, name = "members"),
    path('CA', views.CA, name = "CA"),
    path('live', views.live, name = "live"),
    path('match', views.match, name = "match"),
    path('wishlist', views.wishlist, name = "wishlist"),
    path('profile', views.profile, name = "profile"),
    path('tables', views.tables, name = "tables"),
    path('Userstatus', views.Userstatus, name = "Userstatus"),
    path('gameupdate', views.gameupdate, name = "gameupdate"),
    path('video', views.video, name = "video"),
    path('profilepage', views.profilepage, name = "profilepage"),
    path('edit-profile', views.edit_profile, name='edit_profile'),
    path('change-password/', views.change_password, name='change_password'),



    # path('password_change', views.password_change, name='password_change'),
    path('admin/auth/user/password-change/', views.UserPasswordChangeView.as_view(), name='password_change'),

    path('logoutt', views.logoutt, name = "logoutt"),










]

urlpatterns += staticfiles_urlpatterns()