from flask import Flask
from flask_migrate import Migrate

from config import db, SECRET_KEY

from routes.web import web
from routes.auth import auth

app = Flask(__name__)
app.config.from_object('config')
app.secret_key = SECRET_KEY

db.init_app(app)
migrate = Migrate(app, db)

app.register_blueprint(web, url_prefix='/')
app.register_blueprint(auth, url_prefix='/auth')

if __name__ == '__main__':
    app.run(debug=True)
