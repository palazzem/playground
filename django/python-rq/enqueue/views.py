from django.views.generic.edit import FormView
from django.utils import timezone
from django_rq import get_scheduler

from .forms import SimpleForm
from .tasks import long_running_task


scheduler = get_scheduler('default')


class SimpleView(FormView):
    form_class = SimpleForm
    template_name = "form.html"
    success_url = "/enqueue/"

    def form_valid(self, form):
        now = timezone.now()

        data = form.cleaned_data
        text = data["text"]
        text_scheduled = "{} - delayed by 5 seconds".format(text)

        # executes long_running_task twice: the first is scheduled with 5 seconds timedelta
        # while the second is executed as soon as possible
        scheduler.enqueue_at(now + timezone.timedelta(seconds=5), long_running_task, text_scheduled)
        long_running_task.delay(text)

        return super(SimpleView, self).form_valid(form)
