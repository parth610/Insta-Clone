from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Post, db
from app.forms import PostForm

posts_routes = Blueprint('posts', __name__)

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
            # image_url = form.data['image_url']
    else:
        return 'bad data'
