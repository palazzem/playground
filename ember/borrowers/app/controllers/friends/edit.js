import Ember from 'ember';
import FriendBaseController from './base';

export default FriendBaseController.extend({
    actions: {
       cancel: function() {
            this.transitionToRoute('friends.show', this.get('model'));

            return false;
        }
    }
});
