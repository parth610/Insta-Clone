from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .follows import Follow


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(30), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)
    private = db.Column(db.Boolean, nullable=False)
    profile_pic = db.Column(db.String(5000))
    owner = db.Column(db.Boolean, nullable=True)
    github = db.Column(db.String(5000))
    linkedin = db.Column(db.String(5000))

    comments = db.relationship('Comment', back_populates='user')
    posts = db.relationship('Post', back_populates='user')
    postlikes = db.relationship('PostLike', back_populates='user')
    following = db.relationship('Follow', foreign_keys=[Follow.follower_id], back_populates='follower')
    followers = db.relationship('Follow', foreign_keys=[Follow.followee_id], back_populates='followee')



    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'private': self.private,
            'profile_pic': self.profile_pic,
            'owner': self.owner,
            'linkedin': self.linkedin,
            'github': self.github,
        }
