from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import PostLike, User, db

likes_routes = Blueprint('post_likes', __name__)

@likes_routes.route('/posts/<int:id>')
def get_likes(id):
    likes = PostLike.query.filter(PostLike.post_id == id)
    return jsonify([like.to_dict() for like in likes])

@likes_routes.route('/posts/<int:id>', methods=['POST'])
def create_like(id):
    # user_id = current_user
    # print(user_id,"!!!!!!!!!!!!!!!")
    # post_id = id
    # like = PostLike(
    #     user_id,
    #     post_id
    # )
    # db.session.add(like)
    # db.session.commit()
    # return like.to_dict()
    pass
