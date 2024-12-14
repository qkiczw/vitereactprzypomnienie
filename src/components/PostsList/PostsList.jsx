import Post from "../Post/Post";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

import styles from "./PostsList.module.css";
import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {
  const [postsList, setPosts] = useState([]);

  function addPostHandler(postData) {
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
