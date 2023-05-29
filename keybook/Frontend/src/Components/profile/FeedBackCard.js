export const FeedBackCard = ({ feedback_id, user_id_from, user_id_to, content, name, last_name, profile_picture }) => {

    return (
        <>
            <div className="default-card" key={feedback_id}>
                <div className="post-author">
                    <a href={`/profile/${user_id_from}`}>
                        <img src={profile_picture} alt="avatar" className="avatar"
                        /></a>
                    <h3>{user_id_from} {name} {last_name} {user_id_to} </h3>
                </div>
                <p className="post-content">{content}</p>
            </div>
        </>
    );
}