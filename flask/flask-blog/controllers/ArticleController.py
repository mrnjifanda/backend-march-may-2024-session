from flask import redirect, render_template, request

from config import db
from models.Article import Article


def index():
    articles = Article.query.all()
    return render_template('index.html', title="Home page", articles=articles)

def add_post():
    return render_template('add-post.html', title="Add new post")

def create():
    form = request.form
    title = form['title']
    author = form['author']
    description = form['description']
    
    article = Article(title=title, author=author, description=description)
    db.session.add(article)
    db.session.commit()
    
    return redirect('/')