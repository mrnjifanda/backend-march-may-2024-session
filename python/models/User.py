from config import db
from sqlalchemy.sql import func

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), default=func.now())
    
    @property
    def serialize(self):
        return {
            'id': self.id,
            'username': self.username,
            'password':  self.password,
            'created_at': self.created_at
        }