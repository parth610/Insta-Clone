import React, { useEffect, useState } from 'react'
import SinglePageCommentForm from '../SinglePageComment/SinglePageCommentForm';
import '../SinglePageView/SinglePageView.css'

const SinglePageCommentSection = ({ select }) => {
    return (
        <div>
            <SinglePageCommentForm select={select} />
        </div>
    )
}

export default SinglePageCommentSection
