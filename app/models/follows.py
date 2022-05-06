from .db import db

class Follow(db.Model):
    __tablename__ = 'follows'

    id = db.Column(db.Integer, primary_key=True)
    follower_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    followee_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    follower = db.relationship('User', foreign_keys=[follower_id], back_populates='followers')
    followee = db.relationship('User', foreign_keys=[followee_id], back_populates='following')

    def to_dict(self):
        return {
            'id': self.id,
            'follower_id': self.follower_id,
            'followee_id': self.followee_id,
            'follower_profile_pic': self.follower.profile_pic,
            'followee_profile_pic': self.followee.profile_pic,
            'follower_username': self.follower.username,
            'followee_username':self.followee.username,
            'follower_firstname': self.follower.first_name,
            'followee_firstname':self.followee.first_name,
            'follower_lastname': self.follower.last_name,
            'followee_lastname':self.followee.last_name
        }
