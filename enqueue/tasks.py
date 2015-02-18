import time

from django_rq import job


@job
def long_running_task(text):
    """
    Nothing so useful
    :param text: just a simple text to print
    """
    print(text)
