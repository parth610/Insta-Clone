from app.models import db, Post


def seed_posts():
    post1 = Post(
        url='https://media.wired.co.uk/photos/607d91994d40fbb952b6ad64/4:3/w_2664,h_1998,c_limit/wired-meme-nft-brian.jpg',
        # image_url='https://media.wired.co.uk/photos/607d91994d40fbb952b6ad64/4:3/w_2664,h_1998,c_limit/wired-meme-nft-brian.jpg',
        caption='I love this picture',
        user_id=1
    )
    post2 = Post(
        url='https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        # image_url='https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        caption='I love this place',
        user_id=1
    )
    post3 = Post(
        url='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        # image_url='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        caption='I love this mountain',
        user_id=1
    )
    post4 = Post(
        url='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        # image_url='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        caption='I love the water',
        user_id=1
    )
    post5 = Post(
        url='https://c.files.bbci.co.uk/BD8E/production/_123462584_eyeukraine.jpg',
        # image_url='https://c.files.bbci.co.uk/BD8E/production/_123462584_eyeukraine.jpg',
        caption='I love this painting',
        user_id=1
    )
    post6 = Post(
        url='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        # image_url='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        caption='I love the empty road',
        user_id=1
    )
    post7 = Post(
        url='https://d16kd6gzalkogb.cloudfront.net/magazine_images/Shepard-Fairey-Duality-of-Humanity-2detail-2008-f.jpg',
        # image_url='https://d16kd6gzalkogb.cloudfront.net/magazine_images/Shepard-Fairey-Duality-of-Humanity-2detail-2008-f.jpg',
        caption='I love this picture',
        user_id=1
    )
    post8 = Post(
        url='https://i.pinimg.com/originals/7d/93/7b/7d937b4b3823703f0561760d4e029538.jpg',
        # image_url='https://i.pinimg.com/originals/7d/93/7b/7d937b4b3823703f0561760d4e029538.jpg',
        caption='I love this lighter',
        user_id=1
    )
    post9 = Post(
        url='https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        # image_url='https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        caption='I love this boat',
        user_id=1
    )
    post10 = Post(
        url='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/44/2019/11/14162742/Square_Tickets.jpg',
        # image_url='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/44/2019/11/14162742/Square_Tickets.jpg',
        caption='I love this crowd',
        user_id=1
    )
    post11 = Post(
        url='https://images.unsplash.com/photo-1651604422886-922d0dcc69d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        # image_url='https://images.unsplash.com/photo-1651604422886-922d0dcc69d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        caption='I love this pic',
        user_id=2
    )
    post12 = Post(
        url='https://images.unsplash.com/photo-1651634038110-fc328508c695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        # image_url='https://images.unsplash.com/photo-1651634038110-fc328508c695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        caption='I love this flower',
        user_id=3
    )
    post13 = Post(
        url='https://images.unsplash.com/photo-1651596568011-0ef5956d1194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        # image_url='https://images.unsplash.com/photo-1651596568011-0ef5956d1194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        caption='I love this turtle',
        user_id=4
    )

    db.session.add_all([post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11, post12, post13])
    db.session.commit()
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
