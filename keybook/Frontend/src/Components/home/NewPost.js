import React, { useState } from "react";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonDefault } from "../buttons/ButtonDefault";
import request from "../../utils/url";

function NewPost(props) {
  const [postContent, setPostContent] = useState("");
  const [success, setSuccess] = useState(false);
  const setPostAdded = props.setPostAdded;

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
      const response = await request({
        method: "POST",
        endpoint: "posts",
        body: data,
      });
      if (response) {
        setSuccess(true);
        setPostContent("");
        setPostAdded(response);
      } else {
        const errorText = await response.text();
        console.error(errorText);
      }
    } catch (error) {
      alert("Error del servidor. Vuelva a intentarlo");
      console.error(error);
    }
  }

  return (
    <div className="default-card-center">
      <form id="write-new-post" onSubmit={handleSubmit} noValidate>
        <h2>
          <a>
            <FontAwesomeIcon icon={faPenNib} className="icon" />
          </a>
          NUEVA PUBLICACIÓN
        </h2>
        <textarea
          cols="70"
          rows="3"
          placeholder="ESCRIBIR POST..."
          type="text"
          name="inputPost"
          value={postContent}
          onChange={handleInputChange}
          className="new-post"
        />
        {success && <div >Publicado con éxito ✔</div>}
        <div className="insert">
          <div>
            <ButtonDefault
              type="submit"
              content="Publicar"
              className="btn-lg"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
