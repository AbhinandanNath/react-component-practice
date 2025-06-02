function Post({ postData }) {
  return (
    <div className="post-container">
      {postData.map((item) => {
        return (
          <img
            className="post-image"
            key={item.id}
            src={item.thumbnail}
            alt={item.title}
          />
        );
      })}
    </div>
  );
}

export default Post;
