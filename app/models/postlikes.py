from .db import db

class PostLike(db.Model):
    __tablename__ = 'post_likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)

    user = db.relationship('User', back_populates='postlikes')
    post = db.relationship('Post', back_populates='postlikes')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'post_id': self.post_id,
            'user_fName': self.user.first_name,
            'user_lName': self.user.last_name,
            'user_profile_pic': self.user.profile_pic
        }
