import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import './SinglePageComment.css'


const SinglePageCommentForm = ({ select }) => {
    console.log(select);
    const [imageUrl, setImageUrl] = useState(select?.image_url ? select?.image_url : '')
    const [currCaption, setCurrCaption] = useState(select?.caption ? select?.caption : '')
    const sessionUser = useSelector(state => state.session.user)
    const 
    const handleSubmit = (e) => {
        e.preventDefault()

        const edit_posts = {
            id: select?.id,
            image_url: imageUrl,
            caption: currCaption,
            user_id: sessionUser?.id
        }

    }

    return (
        <div className='editComment'>
            <header className='editComment__editComment'>Edit comment</header>
            <div className="editComment__icons">
                <i class="fa-solid fa-trash editComment__delete"></i>
                <i class="fa-solid fa-pen-to-square editCommnet__edit"></i>
            </div>
            <div className='editComment__container'>
                <div className="editComment__commentSection">
                    <div className="editComment__avatar">

                    </div>

                    <div className='editComment__edit'>
                        <div className="editComment__commentBox">
                            <div className="editComment__name"></div>
                            <div className="editComment__comment">
                                <h5>

                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <form className='editComment__form' >
                    <label htmlFor='editComment__editComment'>
                        {/* <input
                            className='editComment__commentInput'
                            placeholder='Type your edit here, and view changes above'
                            type='text'
                        // onChange={(e) => setCurrComment(e.target.value)}
                        /> */}
                    </label>
                </form>
            </div>
        </div>
    )
}

export default SinglePageCommentForm
