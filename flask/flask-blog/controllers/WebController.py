from flask import render_template, session, redirect, jsonify
from models.User import User

def index():
    return render_template('index.html')

def account():
    
    if 'auth' in session:
        return render_template('account.html')
    return redirect('/auth/login')

def users():
    # users = User.query.all()
    # return jsonify([user.serialize() for user in users])
    
    user = User.query.filter_by(id=1).first()
    return jsonify(user.serialize())
    
    