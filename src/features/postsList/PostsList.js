import React from 'react'
import { Post } from './post/Post'

export const PostsList = () => {

    const postData = () => {
        console.log('working')
    }

    return (
        <div className="posts_container">
            <div className="post_container" onClick={postData}>
                postlist
                <Post />
            </div>

        </div>
    )
}
