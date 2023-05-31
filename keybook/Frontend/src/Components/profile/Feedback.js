import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { url } from "../../utils/url";
import { FeedBackCard } from "./FeedBackCard";
import NewFeedBack from './NewFeedBack';

function Feedback({ user, userId }) {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await fetch(url + `feedback/feed/${userId}`);
                const data = await response.json();
                setFeedback(data);
                // console.log("data", data);
                // console.log("UserId", userId);
            } catch (error) {
                alert("Error de servidor");
                console.log(error);
            }
        };
        fetchFeedback();
    }, []);

    return (
        <>
            <NewFeedBack userId={userId} user={user} />
            {feedback.map((feedbackItem) => (
                <FeedBackCard
                    key={feedbackItem.feedback_id}
                    name={feedbackItem.name}
                    last_name={feedbackItem.last_name}
                    content={feedbackItem.content}
                    linkId={feedbackItem.id}
                    avatar={`${feedbackItem.profile_picture} `}
                />
            ))}

        </>
    );
}

export default Feedback;
