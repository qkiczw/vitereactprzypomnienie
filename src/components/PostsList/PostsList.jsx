import Post from "../Post/Post";
import NewPost from "../NewPost/NewPost";

import styles from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={styles.postsList}>
        <Post author={"Maciej"} body={"Mój brat jest super :)"} />
        <Post author={"Milan"} body={"Wujo jest w pytkę :)"} />
        <Post author={"Sara"} body={"Kocham wujaszka :)"} />
        <Post author={"Denver"} body={"Wooffff! :)"} />
      </ul>
    </>
  );
}

export default PostsList;
