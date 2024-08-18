from flask import Flask, request, jsonify
from gesture_recognition import recognize_gesture

app = Flask(__name__)

@app.route('/gesture', methods=['POST'])
def handle_gesture():
    data = request.get_json()
    gesture = data.get('gesture')
    action = recognize_gesture(gesture)
    return jsonify({'action': action})

if __name__ == '__main__':
    app.run(debug=True)
