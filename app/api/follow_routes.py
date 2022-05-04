from crypt import methods
from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, db, Follow

follow_routes = Blueprint('follows', __name__)


@follow_routes.route('/<int:followee_req_id>', methods=['POST'])
@login_required
def follow_user(followee_req_id):
    curr_user = User.query.filter(User.id == current_user.id).first()
    followee_user = User.query.filter(User.id == followee_req_id).first()
    # print(curr_user.following, '---------------------')

    curr_user_following_list = curr_user.following

    check_follow_id = None
    for element in curr_user_following_list:
        if element.to_dict()["followee_id"] == followee_req_id:
            check_follow_id = element.to_dict()["followee_id"]

    if followee_req_id != curr_user.id:
        if followee_req_id != check_follow_id:
            follow = Follow(
                follower_id=curr_user.id,
                followee_id=followee_user.id
            )
            db.session.add(follow)
            db.session.commit()
            return follow.to_dict()
        else:
            follow = Follow.query.filter(followee_req_id == Follow.followee_id).first()
            db.session.delete(follow)
            db.session.commit()
            return follow.to_dict()
    else:
        pass

    return

@follow_routes.route('/followers/<int:user_id>')
@login_required
def get_followers(user_id):
    curr_user = User.query.filter(User.id == current_user.id).first()

    curr_user_followers_list = curr_user.followers

    return jsonify([follow.to_dict() for follow in curr_user_followers_list])

@follow_routes.route('/following/<int:user_id>')
@login_required
def get_following(user_id):
    curr_user = User.query.filter(User.id == current_user.id).first()

    curr_user_following_list = curr_user.following

    return jsonify([follow.to_dict() for follow in curr_user_following_list])
