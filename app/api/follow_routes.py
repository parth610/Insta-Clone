from crypt import methods
from flask import Blueprint
from flask_login import login_required, current_user
from app.models import User, db, Follow

follow_routes = Blueprint('follows', __name__)


@follow_routes.route('/<int:followee_req_id>', methods=['POST'])
@login_required
def follow_user(followee_req_id):
    curr_user = User.query.filter(User.id == current_user.id).first()
    followee_user = User.query.filter(User.id == followee_req_id).first()
    print(curr_user.following, '-----------------')
    curr_user_following_list = curr_user.following
    follow = Follow.query.filter
    # follow = Follow(
    #     follower_id=curr_user.id,
    #     followee_id=followee_user.id
    # )
    # db.session.add(follow)
    # db.session.commit()
    # print(curr_user.to_dict(), 'followee-id----------', followee_user)
    return {'test': 'yes'}
