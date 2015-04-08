=========
Django RQ
=========

Former an example repository to test [Conda][1] installer.
Now a repository describing how to use [python-rq][2] with Django.

[1]: http://conda.pydata.org/docs/
[2]: http://python-rq.org/

## Requirements

```
    $ pip install -r requirements.txt
```

## Usage

Launch the following commands (in three different shell):

```
    $ python manage.py runserver
    $ python manage.py rqworker
    $ python manage.py rqscheduler
```

Use a simple form that enqueue and print a text message at the ``http://localhost:8000/enqueue/``
