import React from 'react'
import './post.scss'
export const Post = ({ title, url, details, id }) => {
    return (
        <div className="post_container">
            <div className="post_header">
                <h3>{title}</h3>
            </div>
            <div className="post_img">
                <img src={url}
                    alt="" srcset="" />
            </div>
            <div className="post_footer">
                <p>{details}</p>
            </div>
        </div>
    )
}
