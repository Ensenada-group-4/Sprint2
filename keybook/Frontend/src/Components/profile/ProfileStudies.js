function ProfileStudies(props) {
    const { user } = props;

    return (
        <>
            {user && (
                <div className="default-card">
                    <h3>
                        FORMACION
                    </h3>
                    <ul className="profile-data">
                        <p>{user.studies_course}</p>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileStudies;