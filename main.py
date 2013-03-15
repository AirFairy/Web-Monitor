import Server
if __name__ == "__main__":
	server = Server.PyWsgi.WSGIServer(("localhost",8000),Server.app,handler_class = Server.WebSocketHandler)
	server.serve_forever()