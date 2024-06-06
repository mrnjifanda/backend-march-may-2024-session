from flask import Blueprint

from controllers.WebController import index, account, users

web = Blueprint('web', __name__)

web.route('/', strict_slashes=False)(index)
web.route('/account', strict_slashes=False)(account)
web.route('/api/users', strict_slashes=False)(users)