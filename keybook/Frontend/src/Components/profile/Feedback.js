import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { url } from "../../utils/url";
import { FeedBackCard } from "./FeedBackCard";
import NewFeedBack from './NewFeedBack';

function Feedback({ user }) {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await fetch(url + "feedback/feed");
                const data = await response.json();
                setFeedback(data);
                console.log("data", data);
            } catch (error) {
                alert("Error de servidor");
                console.log(error);
            }
        };
        fetchFeedback();
    }, []);

    return (
        <>
            {feedback.map((feedbackItem) => (
                <FeedBackCard
                    key={feedbackItem.feedback_id}
                    name={feedbackItem.name}
                    last_name={feedbackItem.last_name}
                    content={feedbackItem.content}
                />
            ))}
            <NewFeedBack user={user} />
        </>
    );
}

export default Feedback;
