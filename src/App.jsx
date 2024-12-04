import "./App.css";

import "./components/Post/Post";
import Post from "./components/Post/Post";

function App() {
  return (
    <>
      <Post author={"Maciej"} body={"Mój brat jest super :)"} />
      <Post author={"Milan"} body={"Wujo jest w pytkę :)"} />
      <Post author={"Sara"} body={"Kocham wujaszka :)"} />
      <Post author={"Denver"} body={"Wooffff! :)"} />
    </>
  );
}

export default App;
