from flask import Flask
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains (this allows your React app to communicate with Flask)

@app.route('/')
def home():
    return "Flask app is running!"

if __name__ == "__main__":
    # Ensure the app runs on port 8080 and listens on all interfaces
    app.run(host="0.0.0.0", port=8080)
