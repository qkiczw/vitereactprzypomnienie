import styles from "./Post.module.css";

function Post({ author, body }) {
  return (
    <li>
      <div className={styles.postContainer}>
        <p className={styles.author}>{author}</p>
        <p className={styles.post}>{body}</p>
      </div>
    </li>
  );
}

export default Post;
