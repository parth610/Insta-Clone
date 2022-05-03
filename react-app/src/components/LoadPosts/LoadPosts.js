import React from 'react'
import './LoadPosts.css'

const LoadPosts = ({ posts }) => {

    return (
        <div className='loadPosts'>
            {posts.map(post => (
                <div key={post.id} className="loadPost__postCard">
                    <div className="loadPost__imageContainer">
                        <div className='loadPost_opaque_container'>
                            <img className='loadPost__image' src={post.image_url} alt={post.caption} />
                            <div className="loadPost__captionBlock">

                                <div className='caption_text'>{post.caption}</div>
                            </div>
                        </div>
                        <div className="loadPost__contents">
                            <div className="loadPost__lowerLikes">
                                <i className="fa-solid fa-heart fa-lg" ></i>

                            </div>
                        </div>
                    </div>


                </div>
            ))}

        </div>
    )
}

export default LoadPosts
