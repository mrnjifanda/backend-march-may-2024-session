from flask import Flask, redirect, url_for, render_template, request
from config import db, DEBUG, SECRET_KEY, SQLALCHEMY_DATABASE_URI, SQLALCHEMY_TRACK_MODIFICATIONS
from models.User import User
# from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

app.config.from_object('config')
app.secret_key = SECRET_KEY
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = SQLALCHEMY_TRACK_MODIFICATIONS

# db = SQLAlchemy(app)

db.init_app(app)
migrate = Migrate(app, db)

@app.get('/')
def index():
    return render_template('index.html')

@app.post('/send')
def send():
    
    form = request.form
    username = form['username']
    password = form['password']
    
    user = User(username=username, password=password)
    db.session.add(user)
    db.session.commit()

    return f"This is a post request Username: {username} Password: {password}"

if __name__ == '__main__':
    app.debug=DEBUG
    app.config['SEND_FILE_MAX8AGE_DEFAULT'] = 1
    app.run()