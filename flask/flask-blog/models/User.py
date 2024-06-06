from sqlalchemy.sql import func
from config import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime(timezone = True), default = func.now())
    
    def serialize(self):
        return {
            'id': self.id,
            'email': self.email,
            'username': self.username
        }