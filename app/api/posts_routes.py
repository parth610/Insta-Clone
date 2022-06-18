from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Post, db
from app.forms import PostForm
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

posts_routes = Blueprint('posts', __name__)

@posts_routes.route('/<int:id>', methods=['GET'])
def one_post(id):
    post = Post.query.get(id).first()
    return post.to_dict()


@posts_routes.route('/', methods=['GET'])
def all_posts():
    posts = Post.query.order_by(Post.id.desc()).all()
    return jsonify([post.to_dict() for post in posts])

# Image_url text upload
# @posts_routes.route('/', methods=['POST'])
# # @login_required
# def new_post():
#     form = PostForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         post = Post(
#             image_url = form.data['image_url'],
#             caption = form.data['caption'],
#             user_id = form.data['user_id']

#         )

#         # form.populate_obj(post)
#         db.session.add(post)
#         db.session.commit()
#         return post.to_dict()

# Image url aws upload
@posts_routes.route("/", methods=["POST"])
@login_required
def upload_image():
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    new_image = Post(user=current_user, url=url)
    db.session.add(new_image)
    db.session.commit()
    return {"url": url}

@posts_routes.route('/<int:id>', methods=['PUT'])
def update_post(id):
    updated_post = request.get_json(force=True)
    existing_post = Post.query.get(id)
    existing_post.caption = updated_post['caption']
    # db.session.add(new_caption)
    db.session.commit()
    return  existing_post.to_dict()
    # form = PostForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    #     form.populate_obj(update_post)



    #     db.session.add(update_post)
    #     db.session.commit()
    #     return None
        # return update_post.to_dict()


@posts_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    delete_post = Post.query.get(id)
    db.session.delete(delete_post)
    db.session.commit()
    return delete_post.to_dict()

@posts_routes.route('/user-profile-post/<int:id>')
@login_required
def get_user_posts(id):
    user_posts = Post.query.filter(Post.user_id == id).all()
    return jsonify([post.to_dict() for post in user_posts])
