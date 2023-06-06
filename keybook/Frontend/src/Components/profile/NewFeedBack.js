import React, { useState } from "react";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonDefault } from "../buttons/ButtonDefault";
import request from "../../utils/request";
import { useParams } from 'react-router-dom';

//Limited one feedback per user to one other user

function NewFeedBack(props) {
    const [feedbackContent, setFeedBackContent] = useState("");
    const [success, setSuccess] = useState(false);
    const [errorMultipleRecommendations, setErrorMultipleRecommendations] = useState(false);
    const [errorSelfFeedback, setErrorSelfFeedback] = useState(false);
    const { user, userId, setFeedbackAdded } = props;

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
                setFeedbackAdded(true);
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
                    RECOMENDAR USUARIO
                </h2>
                <textarea
                    cols="70"
                    rows="3"
                    placeholder="ESCRIBIR RECOMENDACIÓN..."
                    type="text"
                    name="inputFeed"
                    value={feedbackContent}
                    onChange={handleInputChange}
                    className="new-feedback"
                />
                {success && <div >Recomendación enviada ✔</div>}
                {errorMultipleRecommendations && (
                    <div className="error form-control">
                        Error: Ya has recomendado a este usuario &#10060;
                    </div>
                )}
                {errorSelfFeedback && (
                    <div className="error form-control">
                        No puedes escribirte una recomendación a ti mismo &#10060;
                    </div>
                )}
                <div className="insert">
                    <div>
                        <ButtonDefault
                            type="submit"
                            content="Recomendar"
                            className="btn-lg"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewFeedBack;