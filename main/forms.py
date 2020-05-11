from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Income , Expence , Goals ,Category,ListsItem , UserMembership

class AddGoal(forms.ModelForm):
	class Meta:
		model = Goals
		fields = ( 'title_goal','value_goal',)
		widgets = {
			'title_goal': forms.TextInput(attrs={'class': 'dashboard__popup-input titlefocus','placeholder': 'Add Title'}),
			'value_goal': forms.NumberInput(attrs={'class': 'dashboard__popup-input popupvalue','placeholder': 'Add Value','min': '1'}),
		}


class UpdateUserName(forms.ModelForm):
	class Meta:
		model=UserMembership
		fields=('username',)

class UpdateUserColour(forms.ModelForm):
	class Meta:
		model=UserMembership
		fields=('color',)

class UpdateUserTheme(forms.ModelForm):
	class Meta:
		model=UserMembership
		fields=('colorscheme',)


class UpdateUserLanguage(forms.ModelForm):
	class Meta:
		model=UserMembership
		fields=('language',)
		widgets = {
				
				'language':forms.Select(),
			}

class AddListItem(forms.ModelForm):
	class Meta:
		model = ListsItem
		fields = ( 'title_item','value_item','main_list')
		widgets = {
			'title_item': forms.HiddenInput(),
			'value_item': forms.HiddenInput(),
			'main_list':forms.HiddenInput(),
		}


class AddIncome(forms.ModelForm):

	def __init__(self, *args, **kwargs):
		super(AddIncome, self).__init__(*args, **kwargs)
		self.fields['category'].required = False
	class Meta:
		model = Income
		fields = ( 'title','value','category')
		widgets = {
			'title': forms.TextInput(attrs={'class': 'dashboard__popup-input titlefocus','placeholder': 'Add Title'}),
			'value': forms.NumberInput(attrs={'class': 'dashboard__popup-input popupvalue','placeholder': 'Add Value','min': '1'}),
			'category':forms.Select(attrs={'class': 'dashboard__select'}),
		}

		
class AddExpence(forms.ModelForm):
	def __init__(self, *args, **kwargs):
		super(AddExpence, self).__init__(*args, **kwargs)
		self.fields['category_exp'].required = False
	class Meta:
		model = Expence
		fields = ( 'title_exp','value_exp','category_exp')
		widgets = {
			'title_exp': forms.TextInput(attrs={'class': 'dashboard__popup-input titlefocus','placeholder': 'Add Title'}),
			'value_exp': forms.NumberInput(attrs={'class': 'dashboard__popup-input popupvalue','placeholder': 'Add Value','min': '1'}),
			'category_exp':forms.Select(attrs={'class': 'dashboard__select'}),
		}
		

class AddCategory(forms.ModelForm):
	class Meta:
		model = Category
		fields = ( 'title_c',)
		widgets = {
			'title_c': forms.TextInput(attrs={'class': 'dashboard__popup-input titlefocus','placeholder': 'Add Title'}),
	}

