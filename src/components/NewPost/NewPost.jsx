import styles from "./NewPost.module.css";
function NewPost(props) {
  return (
    <>
      <form className={styles.form}>
        <p className={styles.formSection}>
          <label htmlFor="body">Post</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={props.onBodyDataChange}
          ></textarea>
        </p>
        <p className={styles.formSection}>
          <label htmlFor="author">Name</label>
          <input
            id="author"
            required
            onChange={props.onAuthorDataChange}
          ></input>
        </p>
      </form>
    </>
  );
}

export default NewPost;
