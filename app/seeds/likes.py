from app.models import db, PostLike

def seed_likes():
    like1= PostLike(
        user_id=1,
        post_id=1
    )
    like2= PostLike(
        user_id=2,
        post_id=1
    )
    like3= PostLike(
        user_id=3,
        post_id=1
    )
    like4= PostLike(
        user_id=4,
        post_id=2
    )
    like5= PostLike(
        user_id=5,
        post_id=2
    )
    like6= PostLike(
        user_id=6,
        post_id=3
    )

    db.session.add_all([like1, like2, like3, like4, like5, like6])
    db.session.commit()

def undo_likes():
    db.session.execute('TRUNCATE post_likes RESTART IDENTITY CASCADE;')
    db.session.commit()
