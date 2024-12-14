import Post from "../Post/Post";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

import styles from "./PostsList.module.css";

function PostsList({ isPosting, onStopPosting }) {
  return (
    <>
      {isPosting && ( // If modalIsVisible is true then the Mobile componenet will be rendered
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={styles.postsList}>
        <Post author={"Milan"} body={"Wujo jest w pytkę :)"} />
      </ul>
    </>
  );
}

export default PostsList;
