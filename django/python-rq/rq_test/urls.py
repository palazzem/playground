from django.conf.urls import patterns, include, url
from django.contrib import admin

from enqueue.views import SimpleView


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'django_rq.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^django-rq/', include('django_rq.urls')),
    url(r'^enqueue/', SimpleView.as_view()),
)
