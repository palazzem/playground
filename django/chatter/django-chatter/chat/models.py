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
        return '[{timestamp}] {message}'.format({timestamp: self.format_timestamp, message: self.message})

    @property
    def format_timestamp(self):
        """
        Format the timestamp in ISO format
        """
        return self.timestamp.isoformat()

    def as_dict(self):
        """
        Creates a dictionary that represents this instance;
        used to post back to clients the current stored message
        """
        return {
            'handle': self.handle,
            'message': self.message,
            'timestamp': self.format_timestamp,
        }
