from flask import Flask
from flask_cors import CORS
from config import Config
import os


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
        
    CORS(app, resources={
        r"/*": {
            "origins": [
                "https://damareen2.up.railway.app",
                "http://localhost:3000",
                "http://127.0.0.1:3000",
                "http://localhost:7621",
                "http://127.0.0.1:7621",
                "http://localhost:5500",
                "http://127.0.0.1:5500"
            ],
            "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
            "allow_headers": ["Content-Type", "Authorization", "Accept", "Origin", "X-Requested-With"],
            "expose_headers": ["Content-Type", "Authorization"],
            "supports_credentials": True,
            "max_age": 3600
        }
    })
    
    # API Blueprint regisztrálása
    from app.routes import api
    app.register_blueprint(api)
    
    return app
