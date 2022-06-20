from flask_socketio import flask_socketio
import os

if os.environ.get("FLASK_ENV") == 'production':
    origins=[
        "http://flixtagram.herokuapp.com",
        'https://flixtagram.herokuapp.com/'
]
else:
    origins = "*"


#  create your SocketIO instance
socketio = SocketIO(cors_allowed_origins=origins)

@socketio.on('chat')
def handle_chat(data):
    # code to follow
    emit('chat', data, broadcast=True)
