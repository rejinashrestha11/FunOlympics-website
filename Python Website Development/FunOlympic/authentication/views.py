from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from admin_argon.forms import UserPasswordChangeForm
from django.contrib.auth.views import PasswordChangeView
from django.contrib.auth import update_session_auth_hash
from captcha.fields import ReCaptchaField

# Create your views here.
captcha = ReCaptchaField()

def index (request):
    return render (request, "html/index.html")

def about(request):
    return render (request, "html/about.html")

def register(request):
    
    if request.method == "POST":
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        cpassword = request.POST['cpassword']

        captcha_response = request.POST.get('g-recaptcha-response')
        try:
            captcha.clean(captcha_response)
        except ValidationError:
            messages.error(request, "Invalid reCAPTCHA. Please try again.")
            return redirect('register')

    #Validate User
        if User.objects.filter(username=username):
            messages.error(request, 'Username already exist. Try new username')
            return redirect('register')

        if User.objects.filter(email=email):
            messages.error(request, 'Email already exist!!')
            return redirect('register')
        
         # Validate password

        try:
            validate_password(password, user=User)
        except ValidationError as error:
            messages.error(request, error.messages[0])
            return redirect('register')

        # Check if passwords match
        if password != cpassword:
            messages.error(request, "Passwords do not match.")
            return redirect('register')
        
        myuser = User.objects.create_user(username, email, password)
        myuser.save()

        return redirect ('success')

    return render (request, "html/register.html")

def success(request):
    return render (request, "html/success.html")

def loginn(request):
     if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        captcha_response = request.POST.get('g-recaptcha-response')
        try:
            captcha.clean(captcha_response)
        except ValidationError:
            messages.error(request, "Invalid reCAPTCHA. Please try again.")
            return redirect('loginn')

         # Authenticate user
        user = authenticate(request, username=username, password=password)

        if user is not None:
            # User credentials are correct, log them in
            login(request, user)
            return render(request, "html/index.html", {'username': username})
        else:
            
            messages.error(request, "Invalid username or password.")
        
    
     return render (request, "html/loginn.html")


def profilepage(request):
    user = request.user
    context = {
        'user': user
    }
    return render(request, 'html/profilepage.html', context)


def edit_profile(request):
    if request.method == 'POST':
        user = request.user
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']

        user.first_name = first_name
        user.last_name = last_name
        user.username = username
        user.email = email
        user.save()

        messages.success(request, 'Profile updated successfully.')
        return redirect('profilepage')

    return redirect('profilepage')


def change_password(request):
    if request.method == 'POST':
        current_password = request.POST['current_password']
        new_password = request.POST['new_password']
        confirm_password = request.POST['confirm_password']

        user = request.user

        # Check if the current password is valid
        if user.check_password(current_password):
            # Check if the new password and confirm password match
            if new_password == confirm_password:
                # Set the new password
                user.set_password(new_password)
                user.save()

                # Update the user's session
                update_session_auth_hash(request, user)

                messages.success(request, 'Password changed successfully.')
                return redirect('profilepage')
            else:
                messages.error(request, 'New password and confirm password do not match.')
        else:
            messages.error(request, 'Current password is incorrect.')

    return render(request, 'html/change_password.html')

def contact(request):
    return render (request, "html/contact.html")

def schedule(request):
    return render (request, "html/schedule.html")

def team(request):
    return render (request, "html/team.html")

def basketball(request):
    return render (request, "html/basketball.html")

def members(request):
    return render (request, "html/members.html")

def CA(request):
    return render (request, "html/CA.html")

def blog(request):
    return render (request, "html/blog.html")

def profile(request):
    
    return render (request, "admin/profile.html")

def tables(request):
    
    return render (request, "admin/tables.html")

def gameupdate(request):
    
    return render (request, "admin/gameupdate.html")

def video(request):
    
    return render (request, "admin/video.html")

def Userstatus(request):
    
    return render (request, "admin/Userstatus.html")

# def password_change(request):
    
#     return render (request, "admin/auth/password_change.html")

class UserPasswordChangeView(PasswordChangeView):
  template_name = 'admin/auth/user/password_change.html'
  form_class = UserPasswordChangeForm

def live(request):
    return render (request, "html/live.html")

def wishlist(request):
    return render (request, "html/wishlist.html")

# @login_required(login_url='/loginn')
def match(request):
    return render (request, "html/match.html")

def logoutt(request):
    logout(request)
    return redirect('index')


