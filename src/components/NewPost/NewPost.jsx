import { useState } from "react";
import styles from "./NewPost.module.css";
function NewPost({ onCancel, onAddPost }) {
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
  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      author: enteredAuthor,
      body: enteredBody,
    };

    onAddPost(postData);
    onCancel();
  }

  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <p className={styles.formSection}>
          <label htmlFor="body">Post</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={bodyDataHandler}
          ></textarea>
        </p>
        <p className={styles.formSection}>
          <label htmlFor="author">Name</label>
          <input id="author" required onChange={authorDataHandler}></input>
        </p>
        <p className={styles.actions}>
          <button
            type="button"
            onClick={onCancel}
            className={styles.actionsButtonCancel}
          >
            Cancel
          </button>
          <button className={styles.actionsButtonSubmit}>Submit</button>{" "}
          {/* type="Submit" is set as a default */}
        </p>
      </form>
    </>
  );
}

export default NewPost;
