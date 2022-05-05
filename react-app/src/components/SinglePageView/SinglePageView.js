import React, { useEffect, useState } from 'react'
import SinglePageComment from '../SinglePageComment/SinglePageComment';
import './SinglePageView.css'

const SinglePageView = ({ select, handleClose }) => {
    console.log(select);
    return (
        <div className="singlePageViewContainer" >
            <div className='singlePageView'>
                <div className="singlePageView__image">
                    <img className='singlePageView__pic' src={select.image_url} alt='' />
                </div>
            </div>
            <div className="singlePageView__commentSection">
                <SinglePageComment />
            </div>
        </div>
    )
}

export default SinglePageView
