import React, { useState } from "react";

function PostForm({ onCreatePost }) {
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      id: Date.now(),
      content,
      author: {
        name: "John Doe",
        avatarUrl: "https://i.pravatar.cc/150?img=3",
      },
      createdAt: new Date(),
      likes: 0,
    };

    onCreatePost(newPost);
    setContent("");
  };

  return (
    <div className="new-post-card default-card">
      <h3>
        <i className="fa-solid fa-pen-nib icon" title="Nueva publicación"></i>
        NUEVA PUBLICACIÓN
      </h3>
      <form onSubmit={handleSubmit} noValidate>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          className="new-post"
          cols="70"
          rows="2"
          placeholder="ESCRIBIR POST..."
        ></textarea>
        <div className="insert">
          <i className="fa-solid fa-image icon"></i>
          <i className="fa-solid fa-location-dot icon"></i>
          <i className="fa-solid fa-file icon"></i>
          <button type="submit" className="btn-post btn btn-warning btn-sm">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
