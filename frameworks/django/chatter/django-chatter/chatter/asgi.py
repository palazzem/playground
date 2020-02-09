import os
import channels.asgi


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "chat.settings.dev")
channel_layer = channels.asgi.get_channel_layer()
