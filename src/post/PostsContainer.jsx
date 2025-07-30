import PostsContainer from "./PostsContainer";

function App() {
  const posts = [
    {
      id: 5,
      userId: 1,
      title: "Nesciunt iure omnis dolorem tempora",
      content:
        "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus ess...",
    },
  ];

  return (
    <div className="App">
      <PostsContainer posts={posts} />
    </div>
  );
}
