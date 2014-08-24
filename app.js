var hipchat = require('node-hipchat');
var sys = require('sys');
var exec = require('child_process').exec;

var HC = new hipchat('b9256c4fde0dffc9f84ae1ec8f07fc');

exec("whoami", function(a, me, c){
  var params = {
    room: 598253,
    from: me,
    message: 'just committed!',
    color: 'yellow'
  };

  HC.postMessage(params, function(data) {
    console.log(data);
  });
});

