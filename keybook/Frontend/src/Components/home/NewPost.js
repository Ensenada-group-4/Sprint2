import React, { useState } from "react";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonDefault } from "../ButtonDefault";

function NewPost() {
  const [postContent, setPostContent] = useState("");
  const [success, setSuccess] = useState(false);

  function handleInputChange(event) {
    setPostContent(event.target.value);   
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const userId = localStorage.getItem("userId");
    const data = {
      post_id_user: userId,
      post_content: postContent,
    };

    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        setPostContent("")
      } else {
        const errorText = await response.text();
        console.log(errorText);
      }
    } catch (error) {
      alert("Error del servidor. Vuelva a intentarlo")
      console.error(error);
    }
  }

  return (
    <div className="default-card-center">
      <form id="write-new-post" onSubmit={handleSubmit} noValidate>
        <h3>
          <a>
            <FontAwesomeIcon
              icon={faPenNib}
              className="icon"
            />
          </a>
          NUEVA PUBLICACIÓN
        </h3>
        <textarea cols="70" rows="3"
          placeholder="ESCRIBIR POST..."
          type="text"
          name="inputPost"
          value={postContent}
          onChange={handleInputChange}
          className="new-post"
        />
        {success && (
          <div className="success ">
            Publicado con éxito ✔
          </div>)}
        <div className="insert">
          <div >
            <ButtonDefault
              type="submit"
              content="Publicar"
              className="btn-lg" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
