from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Post, db
from app.forms import PostForm

posts_routes = Blueprint('posts', __name__)

@posts_routes.route('/<int:id>', methods=['GET'])
def one_post(id):
    post = Post.query.get(id).first()
    return post.to_dict()


@posts_routes.route('/', methods=['GET'])
def all_posts():
    posts = Post.query.all()
    return jsonify([post.to_dict() for post in posts])


@posts_routes.route('/', methods=['POST'])
# @login_required
def new_post():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post = Post(
            image_url = form.data['image_url'],
            caption = form.data['caption'],
            user_id = form.data['user_id']

        )

        # form.populate_obj(post)
        db.session.add(post)
        db.session.commit()
        return post.to_dict()

@posts_routes.route('/<int:id>', methods=['PUT'])
def update_post(id):
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        update_post = Post.query.get(id)
        form.populate_obj(update_post)

        db.session.add(update_post)
        db.session.commit()
        return update_post.to_dict()

@posts_routes.route('/<int:id>', methods=['DELETE'])
def delete_post(id):
    delete_post = Post.query.get(id)
    db.session.delete(delete_post)
    db.session.commit()
    return delete_post.to_dict()
