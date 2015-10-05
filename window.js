angular.module('jarvis', [])
.controller('GoalsController', function(){
  var ctrl = this;

  ctrl.goal = {
    name: 'Finish stream',
    time: 20,
    steps: [{
      name: 'Step one',
      done: true
    }, {
      name: 'Step two',
      done: false
    }]
  }

  setInterval(function(){
    ctrl.goal.time -= 1;
  }, 1000);

});




$(document).on('ready', function(){
  $('body').velocity('fadeIn', {stagger: 300});
});

