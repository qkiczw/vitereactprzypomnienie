import styles from "./Post.module.css";

function Post({ author, body }) {
  return (
    <>
      <div className={styles.postContainer}>
        <p className={styles.author}>{author}</p>
        <p className={styles.post}>{body}</p>
      </div>
    </>
  );
}

export default Post;
