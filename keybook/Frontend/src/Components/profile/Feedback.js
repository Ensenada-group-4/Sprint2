import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { url } from "../../utils/url";
import { FeedBackCard } from "./FeedBackCard";
import NewFeedBack from './NewFeedBack';

function Feedback() {
    const [feedback, setfeedback] = useState([]);

    useEffect(() => {
        const fetchfeedback = async () => {
            try {
                const response = await fetch(url + "feedback/feed")
                const data = await response.json();
                setfeedback(data)
            } catch (error) {
                alert("Error de servidor")
                console.log(error)
            }
        }
        fetchfeedback()
    }, []);

    return (
        <>
            {/* .slice(0, 5) */}
            {feedback.map((feedback) => (
                <FeedBackCard
                    key={feedback.feedback_id}
                    href={`profile/${feedback.user_id_from}`}
                    src={`${feedback.profile_picture}`}
                    href={feedback.post_id_user}
                    src={feedback.profile_picture}
                    name={feedback.name}
                    last_name={feedback.last_name}
                    content={feedback.content}
                />
            ))}
        </>
    );
}


export default Feedback;