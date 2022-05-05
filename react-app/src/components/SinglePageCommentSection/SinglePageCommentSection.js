import React, { useEffect, useState } from 'react'
import SinglePageCommentForm from '../SinglePageComment/SinglePageCommentForm';
import '../SinglePageView/SinglePageView.css'

const SinglePageCommentSection = ({ select, handleClose }) => {
    return (
        <div>
            <SinglePageCommentForm select={select} handleClose={handleClose} />
        </div>
    )
}

export default SinglePageCommentSection
