//Reusable feedback card

export const FeedBackCard = ({ feedback_id, user_id_from, user_id_to, content, name, last_name, linkId, avatar, }) => {

    return (
        <>
            <div className="default-card" key={feedback_id}>
                <div className="post-author">
                    <a href={`/profile/${linkId}`}>
                        <img src={avatar} alt="avatar" className="avatar" />
                    </a>
                    <h3>{user_id_from} {name} {last_name} {user_id_to} </h3>
                </div>
                <p className="post-content">{content}</p>
            </div>
        </>
    );
}