import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { allPosts, createNewPost } from '../../store/posts';
import './CreatePostModal.css'

const CreatePostModal = ({ showPostForm }) => {
    const [errors, setErrors] = useState([]);
    // text imageUrl upload
    const [imageUrl, setImageUrl] = useState('');

    // create by aws upload
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [caption, setCaption] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        dispatch(allPosts())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", image);
        formData.append('caption', caption)
        formData.append('user_id', sessionUser?.id)
        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        const res = await fetch('/api/posts/', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            await res.json();
            setImageLoading(false);
            history.push("/home");
        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("error");
        }
        // const post = {
        //     image_url: imageUrl,
        //     caption,
        //     user_id: sessionUser.id
        // };
        // if (imageUrl.length > 0 && caption.length > 0) {
        //     dispatch(createNewPost(post))
        //     showPostForm();
        // } else {
        //     alert('do not leave the inputs empty')
        // }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const updateImageUrl = (e) => {
        setImageUrl(e.target.value)
    }

    const updateCaption = (e) => {
        setCaption(e.target.value)
    }

    return (
        <div className='createPostModal'>
            <div className='createPostModal__preview'>
                {imageUrl ?
                    <img className='createPostModal__previeweImage' src={image} alt='image' /> : <img className='createPostModal__previeweImage' src='https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100006/137486703-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-.jpg?ver=6' alt='image' />}
            </div>
            <form className='createPostModal__form'>
                <div className="createPostModal__container">
                    <div>
                        {errors.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))}
                    </div>
                    <div className='createPostModal__inputs'>
                        {/* <label>Image Url</label> */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={updateImage}
                        />
                        {/* <input
                            type='url'
                            name='imageUrl'
                            placeholder='Please enter image'
                            onChange={updateImageUrl}
                            value={imageUrl}
                        ></input> */}
                        {/* <label>Caption</label> */}
                        <input
                            type='text'
                            name='caption'
                            placeholder='Please enter caption'
                            onChange={updateCaption}
                            value={caption}
                        ></input>
                    </div>
                    <button onClick={handleSubmit} className='createPostModal__createButton' type='submit'>Create Post</button>
                    {(imageLoading) && <p>Loading...</p>}
                </div>
            </form >
        </div >
    )
}

export default CreatePostModal
