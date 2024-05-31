from flask import Flask
from flask_migrate import Migrate

from config import db, SECRET_KEY

from routes.article import article

app = Flask(__name__)
app.config.from_object('config')
app.secret_key = SECRET_KEY

db.init_app(app)
migrate = Migrate(app, db)

app.register_blueprint(article, url_prefix='/')

if __name__ == '__main__':
    app.run(debug=True)
