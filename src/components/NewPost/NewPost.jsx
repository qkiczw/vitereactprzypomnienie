import styles from "./NewPost.module.css";
function NewPost() {
  return (
    <>
      <form className={styles.form}>
        <p className={styles.formSection}>
          <label htmlFor="body">Post</label>
          <textarea id="body" required rows={3}></textarea>
        </p>
        <p className={styles.formSection}>
          <label htmlFor="author">Name</label>
          <input id="author" required></input>
        </p>
      </form>
    </>
  );
}

export default NewPost;
