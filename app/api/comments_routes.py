from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Comment, db
from app.forms import CommentForm

comments_routes = Blueprint('comments', __name__)
