from flask import Blueprint, jsonify, request
from app.models import db, User
from flask_login import login_required, current_user

search_routes = Blueprint('search', __name__)

@search_routes.route('/users')
def search_user():
    users = User.query.all()
    args = request.args.get('search_input')
    search_results = []
    for user in users:
        full_name = f'{user.first_name} {user.last_name}'.lower()
        if user != current_user and full_name.find(args.lower()) >= 0:
            search_results.append(user.to_dict())
    return {'results': search_results}
