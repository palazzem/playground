from django.conf.urls import url

from .views import ChatRoomView


urlpatterns = [
    url(r'^(?P<slug>[\w-]+)/$', ChatRoomView.as_view(), name='room'),
]
