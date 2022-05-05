import React from 'react'
import './SinglePageComment.css'


const SinglePageCommentForm = () => {
    return (
        <div className='editComment'>
            <header className='editComment__editComment'>Comments</header>
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
                        <input
                            className='editComment__commentInput'
                            placeholder='Type your edit here, and view changes above'
                            type='text'
                        // onChange={(e) => setCurrComment(e.target.value)}
                        />
                    </label>
                </form>
            </div>
        </div>
    )
}

export default SinglePageCommentForm
