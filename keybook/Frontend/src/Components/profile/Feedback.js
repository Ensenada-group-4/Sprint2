import React, { useState, useEffect } from 'react';
import { url } from "../../utils/url";
import { FeedBackCard } from "./FeedBackCard";
import NewFeedBack from './NewFeedBack';

function Feedback({ user, userId }) {
    const [feedback, setFeedback] = useState([]);
    const [feedbackAdded, setFeedbackAdded] = useState(false);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await fetch(url + `feedback/feed/${userId}`);
                const data = await response.json();
                setFeedback(data);
            } catch (error) {
                alert("Error de servidor");
                console.log(error);
            }
        };
        fetchFeedback();
    }, [feedbackAdded, userId]);

    return (
        <>
            <NewFeedBack userId={userId} user={user} setFeedbackAdded={setFeedbackAdded} />
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