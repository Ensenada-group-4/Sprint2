import React, { useState } from "react";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonDefault } from "../buttons/ButtonDefault";
import request from "../../utils/url";
import { useParams } from 'react-router-dom';

function NewFeedBack(props) {
    const [feedbackContent, setFeedBackContent] = useState("");
    const [success, setSuccess] = useState(false);
    const [errorMultipleRecommendations, setErrorMultipleRecommendations] = useState(false);
    const [errorSelfFeedback, setErrorSelfFeedback] = useState(false);
    const { user, userId } = props;

    function handleInputChange(event) {
        setFeedBackContent(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const userFrom = localStorage.getItem("userId");
        const userTo = userId;

        if (userFrom === userTo) {
            setErrorSelfFeedback(true);
            return;
        }

        const data = {
            user_id_from: userFrom,
            user_id_to: userTo,
            content: feedbackContent,
        };

        try {
            const response = await request({
                method: "POST",
                endpoint: "feedback",
                body: data,
            });
            if (response.feedback_id) {
                setSuccess(true);
                setFeedBackContent("");
                setErrorMultipleRecommendations(false);
                setErrorSelfFeedback(false);
            } else {
                setErrorMultipleRecommendations(true);
            }
        } catch (error) {
            setErrorMultipleRecommendations(true);
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
                <textarea
                    cols="70"
                    rows="3"
                    placeholder="ESCRIBIR RECOMENDACIÓN..."
                    type="text"
                    name="inputFeed"
                    value={feedbackContent}
                    onChange={handleInputChange}
                    className="new-feed"
                />
                {success && (
                    <div className="success">
                        Publicado con éxito ✔
                    </div>
                )}
                {errorMultipleRecommendations && (
                    <div className="error">
                        No puedes publicar más de una recomendación &#10060;
                    </div>
                )}
                {errorSelfFeedback && (
                    <div className="error">
                        No puedes enviarte a ti mismo un feedback &#10060;
                    </div>
                )}
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

export default NewFeedBack;