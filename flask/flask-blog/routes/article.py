from flask import Blueprint

from controllers.ArticleController import index, add_post, create

article = Blueprint('article', __name__)

article.route('/', methods=['GET'], strict_slashes=False)(index)
article.route('/add-post', methods=['GET'], strict_slashes=False)(add_post)
article.route('/create', methods=['POST'], strict_slashes=False)(create)