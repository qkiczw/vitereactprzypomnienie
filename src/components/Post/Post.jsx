const quotes = ["React is cool!", "React is awesome :)"];

function Post() {
  const chosenQuote = Math.random() > 0.5 ? quotes[0] : quotes[1];
  return (
    <>
      <h1>Post Test</h1>
      <h2>{chosenQuote}</h2>
    </>
  );
}

export default Post;
