import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './SinglePageView.css'

const SinglePageView = ({ currPost, savePostId}) => {
    console.log(currPost);
    return (
        <div className='SinglePageView'>
            {/* <img src={currPost.image_url} alt='image' /> */}
        </div>
    )
}

export default SinglePageView
