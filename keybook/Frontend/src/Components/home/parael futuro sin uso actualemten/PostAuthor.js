import React from "react";

function PostAuthor({ author }) {
  return (
    <div className="post-author">
      <img src={author.avatarUrl} alt="avatar" className="avatar" />
      <h4>{author.name}</h4>
    </div>
  );
}

export default PostAuthor;
