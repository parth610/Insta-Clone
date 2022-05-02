from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Post

class PostForm(FlaskForm):
    image_url = StringField('image url', validators=[DataRequired()])
    caption = StringField('caption', validators=[DataRequired()])
    user_id = IntegerField('user id', validators=[DataRequired()])
