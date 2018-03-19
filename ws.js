var WebSocket = require('ws');
var ws = new WebSocket("ws://127.0.0.1:9000/");

//开启客户端
ws.onopen = function(){
	console.log('Opened');

	//向服务器发消息
	ws.send(" I am client ");

};

//消息监听
ws.onmessage = function(evt){
	console.log(evt.data);
};

ws.onclose = function(){
	console.log("Server close");
};

//错误监听
ws.onerror = function(err){
	console.log('ERROR:'+err);
}