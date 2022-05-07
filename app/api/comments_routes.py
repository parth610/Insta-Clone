from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Comment, db
from app.forms import CommentForm

comments_routes = Blueprint('comments', __name__)

@comments_routes.route('/posts/<int:id>')
def get_comment_by_post_id(id):
    comments = Comment.query.filter(Comment.post_id == id).all()
    return jsonify([comment.to_dict() for comment in comments])

@comments_routes.route('/posts/<int:id>', methods=['POST'])
def post_comment(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment(
            content = form.data['content'],
            user_id = form.data['user_id'],
            post_id = form.data['post_id']
        )

        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()

@comments_routes.route('/<int:id>', methods=['PUT'])
def update_comment(id):
    updated_comment = request.get_json(force=True)
    existing_comment = Comment.query.get(id)
    existing_comment.content = updated_comment['content']
    # db.session.add(new_caption)
    db.session.commit()
    return  existing_comment.to_dict()
    # form = CommentForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    #     update_comment = Comment.query.get(id)
    #     form.populate_obj(update_comment)

    #     db.session.add(update_comment)
    #     db.session.commit()
    #     return update_comment.to_dict()

@comments_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    delete_comment = Comment.query.get(id)
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", delete_comment)
    db.session.delete(delete_comment)
    db.session.commit()
    return delete_comment.to_dict()
