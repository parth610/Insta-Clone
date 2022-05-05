from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Comment, db
from app.forms import CommentForm

comments_routes = Blueprint('comments', __name__)

@comments_routes.route('/posts/<int:id>')
def get_comment_by_post_id(id):
    comments = Comment.query.filter(Comment.post_id == id)
    return jsonify([comment.to_dict() for comment in comments])

# @comments_routes.route('/posts/<int:id>')
# def post_comment(id):
#     form=CommentForm()
