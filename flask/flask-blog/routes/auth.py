from flask import Blueprint

from controllers.AuthController import login, register, login_post, register_post, logout

auth = Blueprint('auth', __name__)

auth.route('/login', methods=['GET'], strict_slashes=False)(login)
auth.route('/register', methods=['GET'], strict_slashes=False)(register)

auth.route('/login-post', methods=['POST'], strict_slashes=False)(login_post)
auth.route('/register-post', methods=['POST'], strict_slashes=False)(register_post)
auth.route('/logout', methods=['POST'], strict_slashes=False)(logout)