from django.db import models
from django.utils import timezone


class Room(models.Model):
    name = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class Message(models.Model):
    handle = models.TextField()
    message = models.TextField()
    timestamp = models.DateTimeField(default=timezone.now, db_index=True)

    room = models.ForeignKey(Room, related_name='messages')

    def __str__(self):
        return '[{timestamp}] {message}'.format({timestamp: self.timestamp.isoformat(), message: self.message})
