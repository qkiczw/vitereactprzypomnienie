import styles from "./Header.module.css";

import { MdPostAdd, MdMessage } from "react-icons/md";
function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        React Poseter
      </h1>
      <p>
        <button className={styles.button}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default Header;
