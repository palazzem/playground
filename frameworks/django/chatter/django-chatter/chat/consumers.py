import json

from channels import Group
from channels.sessions import channel_session

from .models import Room


@channel_session
def ws_connect(message):
    # get the room
    prefix, name = message['path'].strip('/').split('/')
    room = Room.objects.get(name=name)

    # adding the client to the right channel group
    group = Group('chat-%s' % name).add(message.reply_channel)

    # adding the room name to the channel_session available through decorator
    message.channel_session['room'] = room.name


@channel_session
def ws_receive(message):
    # get data
    name = message.channel_session['room']
    data = json.loads(message['text'])
    handle = data['handle']
    message = data['message']

    # store the message
    room = Room.objects.get(name=name)
    m = room.messages.create(handle=handle, message=message)

    # send back the response
    response = {
        'text': json.dumps(m.as_dict())
    }
    Group('chat-%s' % name).send(response)

@channel_session
def ws_disconnect(message):
    # discard the current client
    name = message.channel_session['room']
    Group('chat-%s' % name).discard(message.reply_channel)
