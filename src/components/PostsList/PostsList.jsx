import { useState, useEffect } from "react";

import Post from "../Post/Post";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

import styles from "./PostsList.module.css";

function PostsList({ isPosting, onStopPosting }) {
  const [postsList, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      console.log(resData);
      setPosts(resData.posts);
    }

    fetchPost();
  }, []);

  function addPostHandler(postData) {
    fetch(`http://localhost:8080/posts`, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-type": "application/json",
      },
    });

    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && ( // If modalIsVisible is true then the Mobile componenet will be rendered
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {postsList.length > 0 && (
        <ul className={styles.postsList}>
          {postsList.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {postsList.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no post yet.</h2>
          <p>Start adding something</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
