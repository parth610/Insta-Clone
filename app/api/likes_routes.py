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

    queried_likes = PostLike.query.filter(PostLike.post_id == id).all()
    user_like = [like for like in queried_likes if like.user_id == current_user.id]


    if user_like:
        db.session.delete(user_like[0])
        db.session.commit()
        return user_like[0].to_dict()
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
