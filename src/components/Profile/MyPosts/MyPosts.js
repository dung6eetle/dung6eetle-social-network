import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post.js'

function MyPosts(props) {
    
    let postElement = props.postData.map(p => <Post message={p.message} id={p.id}/> )

    return(
        <div>
         <p>MyPosts</p>
            <div>
              NewPost
            </div>
            <div className={classes.posts}>
                <div>{postElement}</div>
            </div>
        </div>
        
    )
}

export default MyPosts