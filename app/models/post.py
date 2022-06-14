from .db import db

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(5000), nullable=False)
    caption = db.Column(db.String(100))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now(), server_onupdate=db.func.now())

    comments = db.relationship('Comment', back_populates='post', cascade='delete, all')
    user = db.relationship('User', back_populates='posts')
    postlikes = db.relationship('PostLike', back_populates='post', cascade='delete,all')

    def to_dict(self):
        return {
            'id': self.id,
            'image_url': self.image_url,
            'caption': self.caption,
            'user_id': self.user_id,
            'created_at': self.created_at,
            'username': self.user.username,
            'profile_pic': self.user.profile_pic,
            'likes_users': [like.to_dict()['user_id'] for like in self.postlikes],
            'comments': [comment.to_dict() for comment in self.comments],
            'likes': [like.to_dict() for like in self.postlikes]
        }
