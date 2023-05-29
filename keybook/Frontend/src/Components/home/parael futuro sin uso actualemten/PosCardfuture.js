import React, { useState, useEffect } from "react";
import SubmitButton from "../../ButtonStyle";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReplyBox from "./ReplyBox";
import axios from "axios";
// se debe instalar axios con npm i axios
function PostCard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleLikeClick = (postId) => {
    const newPosts = [...posts];
    const index = newPosts.findIndex((post) => post.id === postId);
    newPosts[index].likes = newPosts[index].likes + 1;
    setPosts(newPosts);
  };

  return (
    <div>
      {posts.slice(0, 3).map((post) => (
        <div className="default-card" key={post.id}>
          <div className="post-author">
            <div className="post-card">
              <a href={`/users/${post.user_id}`}>
                <img
                  src={"/" + post.user_profile_picture}
                  alt="Avatar"
                  className="avatar"
                />
              </a>

              <label>{post.post_content}</label>
              <a title={`Perfil ${post.user_name}`} href="#"></a>
              <div>
                <div className="insert">
                  <SubmitButton
                    onClick={() => handleLikeClick(post.id)}
                    className="count"
                    content={
                      <a>
                        <FontAwesomeIcon icon={faHeart} />
                        {post.likes}
                      </a>
                    }
                    title="Like"
                  />
                  <ReplyBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostCard;
