import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save: function () {
            var _this = this;
            this.get("model").save().then(function (friend) {
                _this.transitionToRoute('friends.show', friend);
            });

            return false;
        },
        cancel: function () {
            return true;
        }
    }
});
