var app = require('app');
var BrowserWindow = require('browser-window');

var win = null;
app.on('ready', function() {
  win = new BrowserWindow({width: 400, height: 600, 'title-bar-style': 'hidden'});
  // win = new BrowserWindow({width: 600, height: 800});
  win.loadUrl('file://' + __dirname + '/index.html');
	setInterval(function(){
        win.setAlwaysOnTop(true);
    }, 1);
});
