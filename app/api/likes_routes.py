from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import PostLike, User, db

likes_routes = Blueprint('post_likes', __name__)

@likes_routes.route('/all')
def get_all_likes():
    likes = PostLike.query.all()
    return jsonify([like.to_dict() for like in likes])

@likes_routes.route('/posts/<int:id>')
def get_likes(id):
    likes = PostLike.query.filter(PostLike.post_id == id)
    return jsonify([like.to_dict() for like in likes])

@likes_routes.route('/posts/<int:id>', methods=['POST'])
def update_like(id):

    queried_like = PostLike.query.filter((PostLike.post_id == id) and (PostLike.user_id == current_user.id)).first()

    if queried_like:
        db.session.delete(queried_like)
        db.session.commit()
        return queried_like.to_dict()
    else:
        like = PostLike(
            user_id = current_user.id,
            post_id = id
        )
        db.session.add(like)
        db.session.commit()
        return like.to_dict()



# @likes_routes.route('/posts/<int:id>', methods=['DELETE'])
# def delete_like(id):

#     dislike = PostLike.query.filter((PostLike.post_id == id) and (PostLike.user_id == current_user.id)).first()

#     db.session.delete(dislike)
#     db.session.commit()
