from flask import Flask, jsonify, request, send_from_directory
import light

app = Flask(__name__, static_folder='public')

# API endpoint
@app.route('/api/hello', methods=['GET'])
def hello_api():
    return jsonify({"message": "Hello, World!"})


@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "Username and password required"}), 400

@app.route('/api/power/on', methods=['POST'])
def turn_on():
    print("Turning power on")
    light.toggle_power(True)
    return '', 200

@app.route('/api/power/off', methods=['POST'])
def turn_off():
    print("Turning power off")
    light.toggle_power(False)
    return '', 200

@app.route('/api/color', methods=['POST'])
def set_color():
    data = request.get_json()

    colors = data.get('colors')
    r = colors["red"]
    g = colors["green"]
    b = colors["blue"]

    light.set_color_rgb(r, g, b)
    return '', 200


# Serve static files from the 'public' directory
@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('public', path)


# Default route serves index.html
@app.route('/')
def serve_index():
    return send_from_directory('public', 'index.html')


if __name__ == '__main__':
    # Run the server with HTTPS
    app.run(host='0.0.0.0', port=8000)