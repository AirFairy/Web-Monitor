import gevent
import os
import geventwebsocket
import simplejson as json
import psutil

PyWsgi = gevent.pywsgi
WebSocketHandler = geventwebsocket.handler.WebSocketHandler

def handle(ws):
	if ws.path == "/data":
		while True:
			cpu_usage = psutil.cpu_percent(interval=1, percpu=True)
			virtual_memory = psutil.virtual_memory()[2]
			disk_usage = psutil.disk_usage('/')[3]
			msg = json.dumps({'cpu':cpu_usage,'memory':virtual_memory,'disk':disk_usage})
			ws.send(msg)
			gevent.sleep(0.5)

	

def app(environ,start_response):
	if environ["PATH_INFO"] == "/":
		start_response("200 OK",[("Content-Type", "text/html")])
	elif environ["PATH_INFO"] in ("/data"):
		handle(environ["wsgi.websocket"])
	else:
		start_response("404 Not Found", [])
		return []