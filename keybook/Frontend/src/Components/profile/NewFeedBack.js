import React, { useState } from "react";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonDefault } from "../ButtonDefault";
import request from "../../utils/url";

function NewFeedBack() {
    const [feedbackContent, setFeedBackContent] = useState("");
    const [success, setSuccess] = useState(false);

    function handleInputChange(event) {
        setFeedBackContent(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const userId = localStorage.getItem("userId");
        const data = {
            user_id_from: userId,
            content: feedbackContent,
        };

        try {
            const response = await request({
                method: "POST",
                endpoint: "feedback",
                body: data,
            });
            if (response) {
                setSuccess(true);
                setFeedBackContent("")
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
            <form id="write-new-feed" onSubmit={handleSubmit} noValidate>
                <h2>
                    <a>
                        <FontAwesomeIcon
                            icon={faPenNib}
                            className="icon"
                        />
                    </a>
                    NUEVA RECOMENDACIÓN
                </h2>
                <textarea cols="70" rows="3"
                    placeholder="ESCRIBIR RECOMENDACIÓN..."
                    type="text"
                    name="inputFeed"
                    value={feedbackContent}
                    onChange={handleInputChange}
                    className="new-feed"
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

export default NewFeedBack;