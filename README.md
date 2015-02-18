=========
Django RQ
=========

Example repository to test Conda installer (while trying python RQ!).

# Requirements

```
    $ pip install -r requirements.txt
```

# Usage

Launch the following commands (in three different shell):

```
    $ python manage.py runserver
    $ python manage.py rqworker
    $ python manage.py rqscheduler
```

Use a simple form that enqueue and print a text message at the ``http://localhost:8000/enqueue/``
