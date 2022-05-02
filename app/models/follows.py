from .db import db

class Follow(db.Model):
    __tablename__ = 'follows'

    id = db.Column(db.Integer, primary_key=True)
    follower_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    followee_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    follower = db.relationship('User', foreign_keys=[follower_id], back_populates='user_1_follower')
    followee = db.relationship('User', foreign_keys=[followee_id], back_populates='user_2_followee')

    def to_dict(self):
        return {
            'id': self.id,
            'follower_id': self.follower_id,
            'followee_id': self.followee_id
        }
