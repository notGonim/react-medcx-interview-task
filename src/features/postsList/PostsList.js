import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '../../firebase'
import { Post } from './post/Post'
import './postList.scss'

export const PostsList = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map((doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            ))))
        })
    }, [])
    return (
        <div className="posts_container">
                {posts.map(({ id, data: { title, url, body } }) => (
                    <Post title={title} url={url} details={body} id={id} key={id} />))}
        </div>
    )
}
