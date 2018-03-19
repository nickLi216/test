
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port:9000});

wss.on('connection', function(ws){
		console.log(ws+'+LOAD');

		//监听消息
		ws.on('message', function(msg){
			console.log('received:%s',msg);		
		});
		
		//服务端向客户端写消息
		ws.send('Client hello！');

		//监听下线
		ws.on('close', function(){
			global.gc();//调用内存回收。
			console.log('clients');
		});
	}
)