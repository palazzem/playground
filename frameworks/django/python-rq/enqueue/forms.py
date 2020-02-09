from django import forms


class SimpleForm(forms.Form):
    text = forms.CharField()
