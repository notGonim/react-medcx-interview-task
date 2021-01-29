import { Button } from '@material-ui/core'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from "react-router-dom";
import './createPost.scss'
import firebase from "firebase"
import { db } from '../../firebase';


export const CreatePost = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const  history = useHistory();

    const onPost = (data) => {
        db.collection("posts").add(
            {
                title: data.title,
                url: data.url,
                body: data.details,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        )
        history.push('/')
    }

    return (
        <div className="post_form__container">
            <div className="post_header">
                <h2>Add your Post</h2>
            </div>
            <div className="form_container">
                <form onSubmit={handleSubmit(onPost)}>
                    <input type="text" placeholder="Title" name="title"
                        ref={register({ required: true })} />
                    {errors.title && <p className="form_error">Title is Required</p>}
                    <input type="text" placeholder="img URL" name="url"
                        ref={register({ required: true })} />
                    {errors.url && <p className="form_error">Img URL is Required</p>}
                    <input type="text" placeholder="Details " name="details"
                        ref={register({ required: true })} />
                    {errors.details && <p className="form_error">Details is Required</p>}
                        <Button type="submit" variant="contained" color="primary">Post</Button>
                </form>
            </div>

        </div>
    )
}
