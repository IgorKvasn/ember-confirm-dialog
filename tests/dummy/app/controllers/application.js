import Ember from 'ember';

export default Ember.Controller.extend({

  disabled: false,

  actions: {

    confirmedAction(){
      alert('Hello world confirmed!');
    },


    destroyWorld(){
      alert('World has been destroyed, thanks for using our services.');
    },

    confirmDestroy(){
      alert('World will be destroyd shortly, please wait...');
    },

    cancelDestroy(){
      alert('Uff, that was close, man!');
    }
  }
});
