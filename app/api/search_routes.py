from flask import Blueprint, jsonify, request
from app.models import db, User
from flask_login import login_required

search_routes = Blueprint('search', __name__)

@search_routes.route('/')
def all_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])
