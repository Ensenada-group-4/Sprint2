import React, { useState } from "react";

function SubmitResponse({ postId }) {
  const [response, setResponse] = useState("");

  function handleInputChange(event) {
    setResponse(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/responses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        post_id: postId,
        response_content: response,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResponse("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="response">
        <textarea
          rows="2"
          cols="70"
          value={response}
          onChange={handleInputChange}
        ></textarea>
        <button className="btn-post-btn" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default SubmitResponse;
