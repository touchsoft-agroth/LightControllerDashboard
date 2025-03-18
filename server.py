from flask import Flask, jsonify, request, send_from_directory
import ssl

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

@app.route('/api/power/off', methods=['POST'])
def turn_off():
    print("Turning power off")

@app.route('/api/color', methods=['POST'])
def set_color():
    data = request.get_json()

    r = data


# Serve static files from the 'public' directory
@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('public', path)


# Default route serves index.html
@app.route('/')
def serve_index():
    return send_from_directory('public', 'index.html')


if __name__ == '__main__':
    # For HTTPS, you'll need SSL certificate and key files
    # ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    # ssl_context.load_cert_chain('cert.pem', 'key.pem')

    # Run the server with HTTPS
    app.run(host='0.0.0.0', port=8000, debug=True)