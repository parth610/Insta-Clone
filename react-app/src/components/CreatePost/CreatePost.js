import React, { useState } from 'react';
import CreatePostForm from './CreatePostForm';


const CreatePost = () => {
    const [showForm, setShowForm] = useState(false);

    const showPostForm = () => {
        return setShowForm(!showForm)
    }

    return (
        <div>
            <button type='button' onClick={showPostForm}>Create Post</button>
            {showForm &&
                <CreatePostForm showPostForm={showPostForm} />
            }
        </div>
    )
}

export default CreatePost
