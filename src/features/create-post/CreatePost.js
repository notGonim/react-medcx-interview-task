import { Button } from '@material-ui/core'
import React from 'react'
import './createPost.scss'

export const CreatePost = () => {
    return (
        <div className="post_form__container">
            <div className="post_header">
                <h2>Add your Post</h2>
            </div>
            <div className="form_container">
                <form >
                    <input type="text" placeholder="Title  " />
                    <input type="text" placeholder="img URL" />
                    <input type="text" placeholder="Details " />
                    <Button variant="contained" color="primary">Post</Button>
                </form>
            </div>

        </div>
    )
}
