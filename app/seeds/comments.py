from app.models import db, Comment


def seed_comments():
    comment1 = Comment(
        content='This picture is so cool',
        user_id=1,
        post_id=1
    )
    comment2 = Comment(
        content='I love this place',
        user_id=1,
        post_id=2
    )
    comment3 = Comment(
        content='I been trying to figure out the location of this pic for the longest time, I think I been there once before',
        user_id=2,
        post_id=1
    )
    comment4 = Comment(
        content='No way?! I did too, when I was younger with Marnie and Demo',
        user_id=3,
        post_id=1
    )
    comment5 = Comment(
        content='I really wish I can come back here, unfortunately, I don\'t this I will be able',
        user_id=2,
        post_id=1
    )
    comment6 = Comment(
        content='That\'s too bad, I think I might go check it out this summer!',
        user_id=3,
        post_id=2
    )
    comment6 = Comment(
        content='I think I know this @bobbie, Bobby Builder right? Who are you going with? ',
        user_id=5,
        post_id=2
    )
    comment6 = Comment(
        content='@jacob He\'s probably going with Marnie and Bobbie...',
        user_id=6,
        post_id=2
    )
    comment7 = Comment(
        content='@mason Really? Didn\'t Marnie and Bobbie get marries, like.... last year? ',
        user_id=7,
        post_id=2
    )

    db.session.add_all([comment1, comment2, comment3, comment5, comment6, comment7])
    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
