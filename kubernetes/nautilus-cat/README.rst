===========================
Deployment with update-demo
===========================

Getting started
---------------

Serve through your Kubernetes instance the following directory::

    $ kubectl proxy --www=./web-monitor

The following webpage will be available (at the moment it's a blank page): ``http://localhost:8001/static/``

You can now follow the official `blog post`_.

.. _blog post: http://blog.kubernetes.io/2016/04/using-deployment-objects-with.html
