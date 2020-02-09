from django.views.generic import DetailView

from .models import Room


class ChatRoomView(DetailView):
    model = Room
    slug_field = 'name'
    template_name = 'chat/room.html'
