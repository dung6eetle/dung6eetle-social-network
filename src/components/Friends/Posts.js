import React from "react";
import Loader from "react-loader-spinner";

const Posts = ({loading, posts} ) => {
  if (loading) {
    return <Loader />;
  }
  console.log('11', posts)
  return (
    <div>
      {posts.map(post => (<li key={post.id}>{post.name}</li>))};
    </div>
  );
};
export default Posts;
