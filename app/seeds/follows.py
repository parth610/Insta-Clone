from app.models import db, Follow


def seed_follows():
    follow1 = Follow(
        follower_id = 1,
        followee_id = 4
    )
    follow2 = Follow(
        follower_id = 1,
        followee_id = 5
    )
    follow3 = Follow(
        follower_id = 1,
        followee_id = 6
    )
    follow4 = Follow(
        follower_id = 1,
        followee_id = 7
    )
    follow5 = Follow(
        follower_id = 2,
        followee_id = 1
    )
    follow6 = Follow(
        follower_id = 3,
        followee_id = 1
    )

    db.session.add_all([follow1, follow2, follow3, follow4, follow5, follow6])
    db.session.commit()


def undo_follows():
    db.session.execute('TRUNCATE follows RESTART IDENTITY CASCADE;')
    db.session.commit()
