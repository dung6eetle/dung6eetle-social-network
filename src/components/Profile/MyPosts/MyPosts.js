import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.js";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Textarea } from "../../utils/FormControl";

function MyPosts(props) {
  let postElement = props.postData.map((p) => (
    <Post message={p.message} key={p.id} id={p.id} />
  ));

  let addPostElement = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.content}>
      <div className={classes.postsHeader}>My posts</div>
      <div className={classes.posts}>
        <MyPostsFormRedux onSubmit={addPostElement}/>
        <div className={classes.postElementContainer}>
          <div className={classes.postElement}>{postElement}</div>
        </div>
      </div>
    </div>
  );
}

const maxLength15 = maxLengthCreator(15);

const MyPostsForm = (props) => {
  let onKeyDown = (event) => {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      props.handleSubmit();
    }
  }
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.item}>
        <Field
          validate={[required, maxLength15]}
          className={classes.inputPost}
          component={Textarea}
          onKeyDown={onKeyDown}
          placeholder="write me.."
          name="newPostText"
        ></Field>
      </div>
      <div className={classes.post__add}>
        <button>ADD</button>
      </div>
    </form>
  );
};
const MyPostsFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  MyPostsForm
);
export default MyPosts;
