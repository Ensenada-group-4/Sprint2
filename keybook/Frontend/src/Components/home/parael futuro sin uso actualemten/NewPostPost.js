import React, { useState, useEffect } from "react";
import { FormInput } from "./FormInput";
import SubmitButton from "./ButtonStyle";
import {
  faLocationDot,
  faImage,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NewPost({ loggedUserId }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `http://localhost:3000/posts?page=${page}&limit=5&not_friends_with=${loggedUserId}`
    )
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [loggedUserId, page]);

  function handleSubmit(event) {
    event.preventDefault();
    const postContent = event.target.elements.post.value;
    const postUserId = loggedUserId;
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post_content: postContent,
        post_id_user: postUserId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((prevPosts) => [data, ...prevPosts]);
        event.target.reset();
      })
      .catch((error) => console.error(error));
  }

  function handleImageClick() {}

  function handleLocationClick() {}

  return (
    <div className="default-card-center">
      <label>
        <form id="write-new-post" action="/posts" method="POST" noValidate>
          <h3>
            <a>
              <FontAwesomeIcon
                icon={faPenNib}
                className="icon-btn btn-post-btn"
              />
            </a>
            NUEVA PUBLICACIÓN
          </h3>
          <div className="new-post-content">
            <FormInput
              id="new-post-content"
              cols="70"
              rows="2"
              placeholder="ESCRIBIR POST..."
              type="text"
              name="post"
            />
          </div>
          <div className="insert">
            <SubmitButton
              type="button"
              onClick={handleImageClick}
              content={<FontAwesomeIcon icon={faImage} />}
              id="new-post-image"
              title="Upload image"
            />

            <SubmitButton
              type="button"
              onClick={handleLocationClick}
              content={<FontAwesomeIcon icon={faLocationDot} />}
              title="Enviar"
              id="new-post-location"
            />
            <div className="btn-post-btn-font">
              <SubmitButton
                type="submit"
                content="Enviar"
                title="Enviar"
                id="new-post-submit"
                className="btn-post-btn"
                onClick={handleSubmit}
              />
            </div>
          </div>

          <span className="date"></span>
        </form>
      </label>
    </div>
  );
}

export default NewPost;

// import React, { useState, useEffect } from "react";
// import { FormInput } from "./FormInput";
// import SubmitButton from "./ButtonStyle";
// import {
//   faLocationDot,
//   faImage,
//   faPenNib,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function NewPost({ loggedUserId }) {
//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     fetch(
//       `http://localhost:3000/posts?page=${page}&limit=5&not_friends_with=${loggedUserId}`
//     )
//       .then((response) => response.json())
//       .then((data) => setPosts(data));
//   }, [loggedUserId, page]);

//   function handleSubmit(event) {
//     event.preventDefault();
//     const postContent = event.target.elements.post.value;
//     const postUserId = loggedUserId;
//     fetch("http://localhost:3000/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         post_content: postContent,
//         post_id_user: postUserId,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setPosts((prevPosts) => [data, ...prevPosts]);
//         event.target.reset();
//       })
//       .catch((error) => console.error(error));
//   }

//   function handleImageClick() {}

//   function handleLocationClick() {}

//   return (
//     <div className="default-card-center">
//       <label>
//         <form id="write-new-post" action="/posts" method="POST" noValidate>
//           <h3>
//             <a>
//               <FontAwesomeIcon
//                 icon={faPenNib}
//                 className="icon-btn btn-post-btn"
//               />
//             </a>
//             NUEVA PUBLICACIÓN
//           </h3>
//           <div className="new-post-content">
//             <FormInput
//               id="new-post-content"
//               cols="70"
//               rows="2"
//               placeholder="ESCRIBIR POST..."
//               type="text"
//               name="post"
//             />
//           </div>
//           <div className="insert">
//             <SubmitButton
//               type="button"
//               onClick={handleImageClick}
//               content={<FontAwesomeIcon icon={faImage} />}
//               id="new-post-image"
//               title="Upload image"
//             />

//             <SubmitButton
//               type="button"
//               onClick={handleLocationClick}
//               content={<FontAwesomeIcon icon={faLocationDot} />}
//               title="Enviar"
//               id="new-post-location"
//             />
//             <div className="btn-post-btn-font">
//               <SubmitButton
//                 type="submit"
//                 content="Enviar"
//                 title="Enviar"
//                 id="new-post-submit"
//                 className="btn-post-btn"
//                 onClick={handleSubmit}
//               />
//             </div>
//           </div>

//           <span className="date"></span>
//         </form>
//       </label>
//     </div>
//   );
// }

// export default NewPost;
