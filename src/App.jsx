import "./App.css";

import "./components/Post/Post";
import Header from "./components/Header/Header";

import PostsList from "./components/PostsList/PostsList";

function App() {
  return (
    <>
      <Header />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default App;
