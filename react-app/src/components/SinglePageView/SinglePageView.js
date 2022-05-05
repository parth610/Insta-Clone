import React, { useEffect, useState } from 'react'
import SinglePageCommentSection from '../SinglePageCommentSection/SinglePageCommentSection';
import './SinglePageView.css'

const SinglePageView = ({ select, setShowPage }) => {
    // const [image, setImage] = useState(select?.image_url ? select?.image_url : '')

    const handleClose = () => {
        setShowPage(false)
    }

    return (
        <div className="singlePageViewContainer" >
            <div className='singlePageView'>
                <div className='singlePageContents'>
                    <div className="singlePageView__image" >
                        <div className=''>
                            <img className='singlePageView__pic' src={select?.image_url} alt='' />

                            <button type='button' className='close-post-view-button' onClick={handleClose}>
                                {/* <i className="fa-solid fa-xmark fa-lg"></i> */}
                                Close
                            </button>
                        </div>

                    </div>
                    <div className="singlePageView__commentSection">
                        <SinglePageCommentSection select={select} handleClose={handleClose}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePageView
