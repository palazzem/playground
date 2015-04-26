================
Frontend testing
================

This is just an example about how to use `testem`_ in your frontend project.
``Box`` example is entirely written in ES6 using `Babel`_ transpiler.

Prerequisite
------------

Just:

.. code-block:: bash

    $ npm install -g gulp

Execute testing
---------------

Before each run, *testem* launches `Gulp` ``transpile`` task that transpiles ES5
compliant code in the ``build/`` folder. When the task is done, *testem* will launch
the test runner as usual and you can easily change your ES6 code while the ``transpile``
task is launched automatically after any changes.

To launch *testem* simply:

.. code-block:: bash

    $ npm test

.. _testem: https://github.com/airportyh/testem
.. _Babel: https://babeljs.io/
.. _Gulp: http://gulpjs.com/
