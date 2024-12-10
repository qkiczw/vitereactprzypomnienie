import { useState } from "react";

import Post from "../Post/Post";
import NewPost from "../NewPost/NewPost";

import styles from "./PostsList.module.css";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyDataHandler(event) {
    setEnteredBody(event.target.value);
    console.log(enteredBody);
  }
  function authorDataHandler(event) {
    setEnteredAuthor(event.target.value);
    console.log(enteredAuthor);
  }

  return (
    <>
      <NewPost
        onBodyDataChange={bodyDataHandler}
        onAuthorDataChange={authorDataHandler}
      />
      <ul className={styles.postsList}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author={"Milan"} body={"Wujo jest w pytkę :)"} />
        <Post author={"Sara"} body={"Kocham wujaszka :)"} />
        <Post author={"Denver"} body={"Wooffff! :)"} />
      </ul>
    </>
  );
}

export default PostsList;
