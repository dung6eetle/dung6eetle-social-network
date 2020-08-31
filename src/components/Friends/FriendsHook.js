import React, { useState, useEffect } from "react";
import Axios from "axios";
import Posts from "./Posts.js";
import { usersApi } from "../../api/api.js";
import Pagination from "./Pagination.js";


const FriendsHook = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await usersApi.getUsers()
      setPosts(response.data.items);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  
  return (
    <div>
      <h1>Users</h1>
      <Posts posts={currentPosts}  loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
};
export default FriendsHook;
