import { useState } from "react";
import "./App.css";

import "./components/Post/Post";
import Header from "./components/Header/Header";
import PostsList from "./components/PostsList/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <Header showCreatePostModal={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
