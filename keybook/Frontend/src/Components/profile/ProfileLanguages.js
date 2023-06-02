function ProfileLanguajes(props) {
    const { user } = props;

    return (
        <>
            {user && (
                <div className="default-card">
                    <h3>
                        IDIOMAS
                    </h3>
                    <ul className="profile-data">
                        <p>{user.language_name}</p>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileLanguajes;