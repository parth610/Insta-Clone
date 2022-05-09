import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createNewPost, allPosts } from '../../store/posts';


const CreatePostForm = ({ showPostForm }) => {
    const [errors, setErrors] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [caption, setCaption] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allPosts())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = {
            image_url: imageUrl,
            caption,
            user_id: sessionUser.id
        };
        if (imageUrl.length > 0 && caption.length > 0) {
            dispatch(createNewPost(post))
            showPostForm();
        } else {
            alert('do not leave the inputs empty')
        }
    }

    const updateImageUrl = (e) => {
        setImageUrl(e.target.value)
    }

    const updateCaption = (e) => {
        setCaption(e.target.value)
    }

    return (
        <div className='form-contents'>
            <div>
                {imageUrl ? <img src={imageUrl} alt='image' /> : <img src='https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100006/137486703-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-.jpg?ver=6' alt='image' />}
            </div>
            <form>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <label>Image Url</label>
                    <input
                        type='url'
                        name='imageUrl'
                        onChange={updateImageUrl}
                        value={imageUrl}
                    ></input>
                    <label>Caption</label>
                    <input
                        type='text'
                        name='caption'
                        onChange={updateCaption}
                        value={caption}
                    ></input>
                </div>
                <button onClick={handleSubmit} type='submit'>Create Post</button>
            </form>
        </div>
    )
}

export default CreatePostForm
