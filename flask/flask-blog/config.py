import os
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
SECRET_KEY = os.urandom(32)
SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:password@127.0.0.1:3306/flask_blog_db'
SQLALCHEMY_TRACK_MODIFCATIONS = False
