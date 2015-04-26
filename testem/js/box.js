(function (root) {
    "use strict";

    var Box = function () {
        this.content = [];

        Object.defineProperty(this, "size", {
            get: function () {
                return this.content.length;
            }
        });
    };

    Box.prototype.add = function (object) {
        this.content.push(object);
    };

    Box.prototype.throwAway = function () {
        this.content.length = 0
    }

    root.Box = Box;
})(window);
