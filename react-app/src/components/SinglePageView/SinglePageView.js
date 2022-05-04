import React, { useEffect, useState } from 'react'
import './SinglePageView.css'

const SinglePageView = ({ select }) => {
    console.log(select);
    return (
        <div className='singlePageView'>
            {select.caption}
        </div>
    )
}

export default SinglePageView
