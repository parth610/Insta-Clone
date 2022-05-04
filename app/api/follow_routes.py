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
    # print(curr_user.following, '---------------------')

    curr_user_following_list = curr_user.following
    print(curr_user_following_list)

    pair = []
    for element in curr_user_following_list:
        if element.to_dict()["followee_id"] == followee_req_id:
            pair.append(element.to_dict()["followee_id"] )
            # print('------------------ it matches', element.to_dict())

    if followee_req_id != curr_user.id:
        if followee_req_id not in pair:
            follow = Follow(
                follower_id=curr_user.id,
                followee_id=followee_user.id
            )
            db.session.add(follow)
            db.session.commit()
        else:
            element = Follow.query.filter(followee_req_id == Follow.followee_id).first()
            db.session.delete(element)
            db.session.commit()
            return element.to_dict()
    else:
        pass

    # follow = Follow.query.filter
    return {'test': 'yes'}
