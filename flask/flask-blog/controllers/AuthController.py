from flask import render_template, redirect, request, session
from werkzeug.security import generate_password_hash, check_password_hash

from config import db
from models.User import User

def login():
    return render_template('auth/login.html')

def register():
    return render_template('auth/register.html')

def login_post():
    email = request.form.get('email')
    password = request.form.get('password')

    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return redirect('/auth/login')

    session['auth'] = {
        "id": user.id,
        "username": user.username
    }
    return redirect('/account')

def register_post():
    email = request.form.get('email')
    username = request.form.get('username')
    password = request.form.get('password')
    password_confirm = request.form.get('password-confirm')
    
    if password != password_confirm:
        return redirect('/auth/register')
    
    user = User.query.filter_by(email=email).first()
    if user:
        return redirect('/auth/register')
    
    user = User(email=email, username=username, password=generate_password_hash(password))
    db.session.add(user)
    db.session.commit()
    
    return redirect('/auth/login')

def logout():
    if 'auth' in session:
        session.pop('auth', None)
    return redirect('/auth/login')
