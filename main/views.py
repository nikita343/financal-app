from django.shortcuts import render , redirect , get_object_or_404 
from .models import Membership, UserMembership, Subscription , Goals ,Blog,Income,Expence,Category,ListsItem,List,AllowedMembership,Languages
from django.http import JsonResponse
from .forms import AddIncome,AddExpence,AddGoal,AddCategory,AddListItem,UpdateUserName,UpdateUserLanguage,UpdateUserColour,UpdateUserTheme
from django.core.files.storage import FileSystemStorage
from django.forms.models import model_to_dict
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponseRedirect
from django.views.generic import ListView
from django.urls import reverse
from django.contrib.auth.models import User
import stripe
from django.conf import settings
from django.http import HttpResponse
from django.contrib.auth import login, authenticate
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from .tokens import account_activation_token
from django.core.mail import send_mail
from django.core.mail import EmailMessage
from django.contrib import  auth
from django.template import RequestContext
from django.http import HttpResponseServerError
from django.contrib import messages


def index(request):
    if request.user.is_authenticated:
        return redirect('dashboard')
    else:

        memberships = Membership.objects.filter(is_published=True)
        blog = Blog.objects.order_by('-date').filter(is_published=True)
        context={
            'memberships':memberships,
            'blog': blog
        }

        return render(request,'main/index.html',context)
   
    
    
def lists(request):


    if request.method == 'POST' and request.POST['form_type'] == 'item':
        if request.is_ajax():
            additem = AddListItem(request.POST)
            if additem.is_valid():
                obj = additem.save(commit=False) # Prevent saving before assigning usertask
                obj.user = request.user
                obj.save()
                item_object = model_to_dict(obj)
                return JsonResponse({'error': False, 'data': item_object})
            else:
                print(additem.errors)
                return JsonResponse({'error': True, 'data': additem.errors})
        else:
            error = {
                    'message': 'Error, must be an Ajax call.'
                     }
            return JsonResponse(error, content_type="application/json")

    addlistitem = AddListItem()
    user_membership = UserMembership.objects.filter(user=request.user).first()
    user_membership_type = user_membership.membership.membership_type
    allowedmemberships = get_object_or_404(AllowedMembership)
    user_allowd_mem_types = allowedmemberships.allowed_memberships.all()

    lists = List.objects.order_by('-date').filter(is_published=True, user=request.user.id).prefetch_related('listsitem_set')
    addexpence = AddExpence()
    context={
                'object':None,
                'lists': lists,
                'addlistitem_html':addlistitem,
                'addexpence_html':addexpence
        }
    if user_allowd_mem_types.filter(membership_type=user_membership_type).exists():
        context={
                'object':goals,
                'lists': lists,
                'addlistitem_html':addlistitem,
                'addexpence_html':addexpence
        }
    return render(request,'main/lists.html',context)
   
    

def blog(request):
       blog = Blog.objects.order_by('-date').filter(is_published=True)
       context={
              'blog': blog
       }

       return render(request,'main/blog.html',context)

def blogext(request,blo_id):
       blog=get_object_or_404(Blog,pk=blo_id)
       context={
              'blog':blog
       }
       return render(request,'main/blog_ext.html',context)

@login_required
def calendar(request):

    income = Income.objects.order_by('-date').filter(is_published=True, user=request.user.id)
    expence = Expence.objects.order_by('-date').filter(is_published=True, user=request.user.id)
    context={
        'income':income,
        'expence':expence,
    }
    return render(request,'main/calendar.html',context)





@login_required
def dashboard(request):

    if request.method == 'POST' and request.POST['form_type'] == 'goal':
        if request.is_ajax():
            addgoal = AddGoal(request.POST)
            if addgoal.is_valid():
                obj = addgoal.save(commit=False) # Prevent saving before assigning usertask
                obj.user = request.user
                obj.save()
                goal_object = model_to_dict(obj)
                return JsonResponse({'error': False, 'data': goal_object})
            else:
                print(addgoal.errors)
                return JsonResponse({'error': True, 'data': addgoal.errors})
        else:
            error = {
                    'message': 'Error, must be an Ajax call.'
                     }
            return JsonResponse(error, content_type="application/json")


    if request.method == 'POST' and request.POST['form_type'] == 'income':
        if request.is_ajax():
            addincome = AddIncome(request.POST)
            if addincome.is_valid():
                obj = addincome.save(commit=False) # Prevent saving before assigning usertask
                obj.user = request.user
                obj.save()
                income_object = model_to_dict(obj)
                return JsonResponse({'error': False, 'data': income_object})
            else:
                print(addincome.errors)
                return JsonResponse({'error': True, 'data': addincome.errors})
        else:
            error = {
                    'message': 'Error, must be an Ajax call.'
                     }
            return JsonResponse(error, content_type="application/json")


    if request.method == 'POST' and request.POST['form_type'] == 'expence':
        if request.is_ajax():
                addexpence = AddExpence(request.POST)
                if addexpence.is_valid():
                        obj = addexpence.save(commit=False) # Prevent saving before assigning usertask
                        obj.user = request.user
                        obj.save()
                        expence_object = model_to_dict(obj)
                        return JsonResponse({'error': False, 'data': expence_object})
                else:
                    print(addexpence.errors)
                    return JsonResponse({'error': True, 'data': addexpence.errors})
        else:
            error = {
                    'message': 'Error, must be an Ajax call.'
                    }
            return JsonResponse(error, content_type="application/json")
            
    if request.method == 'POST' and request.POST['form_type'] == 'category':
        if request.is_ajax():
                addcategory = AddCategory(request.POST)
                if addcategory.is_valid():
                        obj = addcategory.save(commit=False) # Prevent saving before assigning usertask
                        obj.user = request.user
                        obj.save()
                        category_object = model_to_dict(obj)
                        return JsonResponse({'error': False, 'data': category_object})
                else:
                    print(addcategory.errors)
                    return JsonResponse({'error': True, 'data': addcategory.errors})
        else:
            error = {
                    'message': 'Error, must be an Ajax call.'
                    }
            return JsonResponse(error, content_type="application/json")
    else:
        addincome = AddIncome()
        addgoal = AddGoal()
        addexpence = AddExpence()
        addcategory = AddCategory()
        income = Income.objects.order_by('-date').filter(is_published=True, user=request.user.id)
        expence = Expence.objects.order_by('-date').filter(is_published=True, user=request.user.id)
        category = Category.objects.order_by('-date').filter(is_published=True, user=request.user.id)
        user_membership = UserMembership.objects.filter(user=request.user).first()
        goalss = Goals.objects.order_by('-date').filter(is_published=True, user=request.user.id)[:1]
        user_membership_type = user_membership.membership.membership_type
    
        allowedmemberships = get_object_or_404(AllowedMembership)
        user_allowd_mem_types = allowedmemberships.allowed_memberships.all()


        data = {
                'object':None,
                'goalss':goalss,
                'addgoal_html': addgoal,
                'addcategory_html':addcategory,
                'addincome_html': addincome,
                'addexpence_html': addexpence,
                'income':income,
                'expence':expence,
                'category':category
        }
        if user_allowd_mem_types.filter(membership_type=user_membership_type).exists():
            data = {
                    'object':goals,
                    'goalss':goalss,
                    'addgoal_html': addgoal,
                    'addcategory_html':addcategory,
                    'addincome_html': addincome,
                    'addexpence_html': addexpence,
                    'income':income,
                    'expence':expence,
                    'category':category
                    }



        return render(request, template_name='main/dashboard.html', context=data)


@login_required
def goals(request):

    user_membership = UserMembership.objects.filter(user=request.user).first()
    user_membership_type = user_membership.membership.membership_type
    allowedmemberships = get_object_or_404(AllowedMembership)
    user_allowd_mem_types = allowedmemberships.allowed_memberships.all()
    goalss = Goals.objects.order_by('-date').filter(is_published=True, user=request.user.id)
    context={
            'object':None,
            'goalss':goalss,
    }

    if user_allowd_mem_types.filter(membership_type=user_membership_type).exists():
        context={
                'object':goals,
                'goalss':goalss,
        }
    return render(request,'main/goals.html',context)



def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username = username, password = password)
        if user is not None:
            auth.login(request,user)
          
            return redirect('dashboard')
        else:
            messages.error(request,'Invalid credits')
            return redirect('login')
    else:
        if request.user.is_authenticated:
            return redirect('dashboard')
        else:
            return render(request,'main/login.html',)

def registration(request):
    if request.method == 'POST':
        class form:
            username = request.POST['username']
            email = request.POST['email']
            password = request.POST['password']
            password2 = request.POST['password2']
        
        if form.password == form.password2:
                if User.objects.filter(username=form.username).exists():
                    messages.error(request,'That email is taken')

                    return redirect('registration')
                else:
                    if User.objects.filter(email=form.email).exists():
                        messages.error(request,'That email is taken')
                        return redirect('registration')
                    else:
                        
                        user = User.objects.create_user(username=form.username,password =form.password,email = form.email)
                        user.is_active = False
                        user.save()   
                        current_site = get_current_site(request)
                        mail_subject = 'Activate your Financal account.'
                        message = render_to_string('main/acc_active_email.html', {
                            'user': user,
                            'domain': current_site.domain,
                            'uid':urlsafe_base64_encode(force_bytes(user.pk)),
                            'token':account_activation_token.make_token(user),
                        })
                       
                        to_email = form.email
                        email = EmailMessage(
                                    mail_subject, message, to=[to_email]
                        )
                        email.send()
                        return render(request,'main/activate_page.html',)
                      

    else:
        if request.user.is_authenticated:
            return redirect('dashboard')
        else:
            return render(request,'main/registration.html',)
        

def settings(request):

       if 'imagechange' in request.POST and request.FILES['image']:
              user = request.user.id
              image = request.FILES['image']
              fs = FileSystemStorage()
              image_fs = fs.save(image.name, image)
              image_new = UserMembership.objects.filter(user=user).update(image=image_fs)
              return redirect('settings')
       elif 'colorchange' in request.POST:
              user = request.user.id
              color=request.POST['color']
              color_new = UserMembership.objects.filter(user=user).update(color=color)
              return redirect('settings')

       elif 'schemeblack' in request.POST:
              user = request.user.id
              theme=request.POST['schemeblack']
              theme_new=UserMembership.objects.filter(user=user).update(colorscheme=theme)
              return redirect('settings')

       elif 'schemewhite' in request.POST:
              user = request.user.id
              theme_l=request.POST['schemewhite']
              theme_l_new=UserMembership.objects.filter(user=user).update(colorscheme=theme_l)       
              return redirect('settings')

       elif 'updateUsername' in request.POST:
              user = request.user.id
              new_username = request.POST['newUserName']
              new_username=UserMembership.objects.filter(user=user).update(username=new_username)  
              return redirect('settings')
      
       elif 'currencychange' in request.POST:
              user = request.user.id
              new_currency = request.POST['currencychange']
              new_currency=UserMembership.objects.filter(user=user).update(currency=new_currency)        
              return redirect('settings')
      
       elif 'updatepassname' in request.POST:
              user = request.user
              new_password = request.POST['newpassword']
              user.set_password(new_password)
              user.save()
              return redirect('settings')
            
       elif 'languageupdate' in request.POST:
              user = request.user
              language = request.POST['languageupdate']
              languages=UserMembership.objects.filter(user=user).update(language=language)        
              return redirect('settings')


       user_membership = UserMembership.objects.filter(user=request.user).first()
       user_membership_type = user_membership.membership.membership_type
       allowedmemberships = get_object_or_404(AllowedMembership)
       user_allowd_mem_types = allowedmemberships.allowed_memberships.all()
       languages = Languages.objects.filter(is_published=True) 
       context={
            'object':None,
            'languages':languages
        }   
       if user_allowd_mem_types.filter(membership_type=user_membership_type).exists():
        context={
                'object':goals,         
                'languages':languages
        }

       return render(request,'main/settings.html',context)


def logout(request):
      if request.method == 'POST':
          auth.logout(request)
          return redirect('index')


def income_delete(request, id):
       if request.method == 'POST' and request.is_ajax():
              try:
                     income_object = Income.objects.get(pk=id)
                     income_object.delete()
                     return JsonResponse({'status': 'Success', 'message': 'Recoard has been deleted.'})
              except Income.DoesNotExist:
                     return JsonResponse({'status': 'Fail', 'message': 'Recoard does not exist.'})
       return JsonResponse({'status': 'Fail', 'message': 'Error, must be an Ajax call.'})

def list_delete(request, id):
       if request.method == 'POST' and request.is_ajax():
              try:
                     List_object = List.objects.get(pk=id)
                     List_object.delete()
                     return JsonResponse({'status': 'Success', 'message': 'Recoard has been deleted.'})
              except Income.DoesNotExist:
                     return JsonResponse({'status': 'Fail', 'message': 'Recoard does not exist.'})
       return JsonResponse({'status': 'Fail', 'message': 'Error, must be an Ajax call.'})

def update_budget(request):
    if request.method == 'POST' and request.is_ajax():
        user = request.user.id
        new_budget = request.POST['budgetchange']
        new_budget=UserMembership.objects.filter(user=user).update(budget=new_budget)        
        return HttpResponse('success')
    else:
        return JsonResponse({'status': 'Fail', 'message': 'Recoard does not exist.'})


def expence_delete(request, id):
       if request.method == 'POST' and request.is_ajax():
              try:
                     expence_object = Expence.objects.get(pk=id)
                     expence_object.delete()
                     return JsonResponse({'status': 'Success', 'message': 'Recoard has been deleted.'})
              except Expence.DoesNotExist:
                     return JsonResponse({'status': 'Fail', 'message': 'Recoard does not exist.'})
       return JsonResponse({'status': 'Fail', 'message': 'Error, must be an Ajax call.'})

def item_delete(request, id):
       if request.method == 'POST' and request.is_ajax():
              try:
                     item_object = ListsItem.objects.get(pk=id)
                     item_object.delete()
                     return JsonResponse({'status': 'Success', 'message': 'Recoard has been deleted.'})
              except Expence.DoesNotExist:
                     return JsonResponse({'status': 'Fail', 'message': 'Recoard does not exist.'})
       return JsonResponse({'status': 'Fail', 'message': 'Error, must be an Ajax call.'})

def category_delete(request, id):
       if request.method == 'POST' and request.is_ajax():
              try:
                     category_object = Category.objects.get(pk=id)
                     category_object.delete()
                     return JsonResponse({'status': 'Success', 'message': 'Recoard has been deleted.'})
              except Expence.DoesNotExist:
                     return JsonResponse({'status': 'Fail', 'message': 'Recoard does not exist.'})
       return JsonResponse({'status': 'Fail', 'message': 'Error, must be an Ajax call.'})


def goal_delete(request, id):
       if request.method == 'POST' and request.is_ajax():
              try:
                     goal_object = Goals.objects.get(pk=id)
                     goal_object.delete()
                     return JsonResponse({'status': 'Success', 'message': 'Recoard has been deleted.'})
              except Expence.DoesNotExist:
                     return JsonResponse({'status': 'Fail', 'message': 'Recoard does not exist.'})
       return JsonResponse({'status': 'Fail', 'message': 'Error, must be an Ajax call.'})



def get_user_membership(request):
       user_membership_qs = UserMembership.objects.filter(user=request.user)
       if user_membership_qs.exists():
              return user_membership_qs.first()
       return None



def get_user_subscription(request):
       user_subscription_qs = Subscription.objects.filter(
              user_membership=get_user_membership(request))
       if user_subscription_qs.exists():
              user_subscription = user_subscription_qs.first()
              return user_subscription
       return None


def get_selected_membership(request):
       membership_type = request.session['selected_membership_type']
       selected_membership_qs = Membership.objects.filter(
              membership_type=membership_type)
       if selected_membership_qs.exists():
              return selected_membership_qs.first()
       return None





class MembershipSelectView(LoginRequiredMixin, ListView):
    model = Membership

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        current_membership = get_user_membership(self.request)
        context['current_membership'] = str(current_membership.membership)
        return context

    def post(self, request, **kwargs):
        user_membership = get_user_membership(request)
        user_subscription = get_user_subscription(request)
        selected_membership_type = request.POST.get('membership_type')

        selected_membership = Membership.objects.get(
            membership_type=selected_membership_type)

        if user_membership.membership == selected_membership:
            if user_subscription is not None:
                # messages.info(request, """You already have this membership. Your
                #               next payment is due {}""".format('get this value from stripe'))
                return HttpResponseRedirect(request.META.get('HTTP_REFERER'))

        # assign to the session
        request.session['selected_membership_type'] = selected_membership.membership_type

        return HttpResponseRedirect(reverse('payment'))


@login_required
def PaymentView(request):
    user_membership = get_user_membership(request)
    try:
        selected_membership = get_selected_membership(request)
    except:
        return redirect(reverse("select"))
    publishKey = True
    if request.method == "POST":
        try:
            token = request.POST['stripeToken']

            # UPDATE FOR STRIPE API CHANGE 2018-05-21

            '''
            First we need to add the source for the customer
            '''

            customer = stripe.Customer.retrieve(user_membership.stripe_customer_id)
            customer.source = token # 4242424242424242
            customer.save()

            '''
            Now we can create the subscription using only the customer as we don't need to pass their
            credit card source anymore
            '''

            subscription = stripe.Subscription.create(
                customer=user_membership.stripe_customer_id,
                items=[
                    { "plan": selected_membership.stripe_plan_id },
                ]
            )

            return redirect(reverse('update-transactions',
                                    kwargs={
                                        'subscription_id': subscription.id
                                    }))

        except:
            print(request, "An error has occurred, investigate it in the console")

    context = {
        'publishKey': publishKey,
        'selected_membership': selected_membership
    }

    return render(request, "main/membership_payment.html", context)

@login_required
def updateTransactionRecords(request, subscription_id):
    user_membership = get_user_membership(request)
    selected_membership = get_selected_membership(request)
    user_membership.membership = selected_membership
    user_membership.save()

    sub, created = Subscription.objects.get_or_create(
        user_membership=user_membership)
    sub.stripe_subscription_id = subscription_id
    sub.active = True
    sub.save()

    try:
        del request.session['selected_membership_type']
    except:
        pass

    return redirect(reverse('dashboard'))

@login_required
def cancelSubscription(request):
    user_sub = get_user_subscription(request)
    user = request.user
    if user_sub.active is False:
        messages.error(request, "You dont have an active membership")
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))

    sub = stripe.Subscription.retrieve(user_sub.stripe_subscription_id)
    sub.delete()

    user_sub.active = False
    user_sub.save()

    free_membership = Membership.objects.get(membership_type='Free')
    user_membership = get_user_membership(request)
    user_membership.membership = free_membership
    user_membership.save()

    messages.error(
        request, "Successfully cancelled membership. We have sent an email")
    current_site = get_current_site(request)
    mail_subject = 'Successfully cancelled membership.'
    message = render_to_string('main/cancel_membership.html', {
        'user': user,
        'domain': current_site.domain,
    })

    
    to_email = user.email
    email = EmailMessage(
                mail_subject, message, to=[to_email]
    )
    email.send()

    return redirect(reverse('dashboard'))



def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        auth.login(request,user)
        return redirect('personalisation')
    else:
        return HttpResponse('Activation link is invalid!')


def add_list(request):
    user = request.user
    lists_title=request.POST['title_list']
    listss= List(title_list=lists_title,user=user)
    listss.save()
    return redirect('lists')


def personalization(request):
    if request.method == 'POST' and request.POST['form_type'] == 'username':
        if request.is_ajax():
                updateusername = UpdateUserName(request.POST)
                if updateusername.is_valid():
                    
                    obj = updateusername.save(commit=False)
                    user = request.user
                    newusername = UserMembership.objects.filter(user=user).update(username=obj.username) 
                    
                    return JsonResponse({'error': False, 'data': newusername})
                else:
                    print(updateusername.errors)
                    return JsonResponse({'error': True, 'data': updateusername.errors})
        else:
            error = {
                    'message': 'Error, must be an Ajax call.'
                    }
            return JsonResponse(error, content_type="application/json")


    if request.method == 'POST' and request.POST['form_type'] == 'language':
        if request.is_ajax():
                updatelanuage = UpdateUserLanguage(request.POST)
                if updatelanuage.is_valid():
                    obj = updatelanuage.save(commit=False)
                    user = request.user
                    newlanguage = UserMembership.objects.filter(user=user).update(language=obj.language) 

                    return JsonResponse({'error': False, 'data': newlanguage})
                else:
                    print(updatelanuage.errors)
                    return JsonResponse({'error': True, 'data': updatelanuage.errors})
        else:
            error = {
                
                    'message': 'Error, must be an Ajax call.'
                    }
            return JsonResponse(error, content_type="application/json")
    if request.method == 'POST' and request.POST['form_type'] == 'color':
        if request.is_ajax():
                updatecolor = UpdateUserColour(request.POST)
                if updatecolor.is_valid():
                    obj = updatecolor.save(commit=False)
                    user = request.user
                    newcolor = UserMembership.objects.filter(user=user).update(color=obj.color) 

                    return JsonResponse({'error': False, 'data': newcolor})
                else:
                    print(updatecolor.errors)
                    return JsonResponse({'error': True, 'data': updatecolor.errors})
        else:
            error = {
                
                    'message': 'Error, must be an Ajax call.'
                    }
            return JsonResponse(error, content_type="application/json")

    if request.method == 'POST' and request.POST['form_type'] == 'theme':
        if request.is_ajax():
                updatetheme = UpdateUserTheme(request.POST)
                if updatetheme.is_valid():
                    obj = updatetheme.save(commit=False)
                    user = request.user
                    newtheme = UserMembership.objects.filter(user=user).update(colorscheme=obj.colorscheme) 

                    return JsonResponse({'error': False, 'data': newtheme})
                else:
                    print(updatetheme.errors)
                    return JsonResponse({'error': True, 'data': updatetheme.errors})
        else:
            error = {
                
                    'message': 'Error, must be an Ajax call.'
                    }
            return JsonResponse(error, content_type="application/json")
    if request.method == 'POST' and request.POST['form_type'] == 'image':
        user = request.user.id
        image = request.FILES['image']
        fs = FileSystemStorage()
        image_fs = fs.save(image.name, image)
        image_new = UserMembership.objects.filter(user=user).update(image=image_fs)
        return redirect('select')
    else:

        username = UpdateUserName()
        languages = Languages.objects.filter(is_published=True) 
        context={
            'username_html':username,
            'languages':languages
        }   
        return render(request, "main/personalisation.html",context)


def terms_and_conditions(request):
    return render(request,"main/terms_and_conditions.html")


def privacy(request):
    return render(request,"main/privacy.html")