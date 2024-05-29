import os
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

SECRET_KEY = os.urandom(32)
DEBUG = True

SQLALCHEMY_DATABASE_URI = 'mysql://root:password@127.0.0.1:3306/flask_db' 
SQLALCHEMY_TRACK_MODIFICATIONS = False
