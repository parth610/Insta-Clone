from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo',
        email='demo@aa.io',
        password='password',
        first_name='Demo',
        last_name='Lition',
        private=False,
        owner=False,
        profile_pic=None
        )
    marnie = User(
        username='marnie',
        email='marnie@aa.io',
        password='password',
        first_name='Marnie',
        last_name='Lition',
        private=False,
        owner=False,
        profile_pic=None,

        )
    bobbie = User(
        username='bobbie',
        email='bobbie@aa.io',
        password='password',
        first_name='Bobbie',
        last_name='Builder',
        private=False,
        owner=False,
        profile_pic=None
        )
    gabe = User(
        username='gabe',
        email='gabe@aa.io',
        password='password',
        first_name='Gabriel',
        last_name='Sitorus',
        private=False,
        owner= True,
        profile_pic='https://media-exp1.licdn.com/dms/image/D5603AQHYi5RD9DFdKA/profile-displayphoto-shrink_400_400/0/1647206013202?e=1657152000&v=beta&t=GwrG2HnQMhppGvJxjrGxzY8WbCDLBTCVHM6bQR1TJ2k',
        github='https://github.com/GabeS97',
        linkedin='https://www.linkedin.com/in/gabriel-sitorus/',
        )
    jacob = User(
        username='jacob',
        email='jacob@aa.io',
        password='password',
        first_name='Jacob',
        last_name='Chamberlain',
        private=False,
        owner= True,
        profile_pic='https://images.unsplash.com/photo-1651599464361-3979cd0ecb40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60m',
        github='https://github.com/JacobDChamberlain',
        linkedin=None
        )
    mason = User(
        username='mason',
        email='mason@aa.io',
        password='password',
        first_name='Mason',
        last_name='Taylor ',
        private=False,
        owner= True,
        profile_pic='https://ca.slack-edge.com/T03GU501J-U02B6NB0LJK-0833227ecc59-512',
        github='https://github.com/masontaylor7',
        linkedin='https://www.linkedin.com/in/mason-taylor-5a2139211/'
        )
    parth = User(
        username='parth',
        email='parth@aa.io',
        password='password',
        first_name='Parth',
        last_name='Bhakta ',
        private=False,
        owner= True,
        profile_pic='https://ca.slack-edge.com/T03GU501J-U02DVPCFSDC-2f42b255bc03-512',
        github='https://github.com/masontaylor7',
        linkedin='https://www.linkedin.com/in/parth-bhakta-a7883998/'
        )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(gabe)
    db.session.add(jacob)
    db.session.add(mason)
    db.session.add(parth)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
