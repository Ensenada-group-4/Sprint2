import React, { useState } from "react";
import SubmitButton from "../ButtonStyle";
import {
  faPenNib,
  faPaperPlane,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ReplyBox({ onReply }) {
  const [replyText, setReplyText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function handleReplyClick() {
    setIsOpen(true);
  }

  function handleCloseClick() {
    setIsOpen(false);
  }

  function handleInputChange(event) {
    setReplyText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onReply(replyText);
    setReplyText("");
    setIsOpen(false);
  }

  return (
    <div>
      <div className="btn-post-btn-font">
        <SubmitButton
          type="button"
          onClick={handleReplyClick}
          content={<FontAwesomeIcon icon={faPenNib} />}
          id="new-post-image"
          title="open"
        />

        {isOpen && (
          <div className="reply">
            <div className="card reply-box">
              <textarea
                rows="2"
                cols="70"
                value={replyText}
                onChange={handleInputChange}
                className="reply-box-textarea"
              />
              <SubmitButton
                type="submit"
                onClick={handleSubmit}
                content={<FontAwesomeIcon icon={faPaperPlane} />}
                id="new-post-submit"
                title="reply"
              />
              <SubmitButton
                type="button"
                content={<FontAwesomeIcon icon={faTimes} />}
                title="Cerrar"
                className="btn-post-btn"
                onClick={handleCloseClick}
                id="close-button"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReplyBox;
