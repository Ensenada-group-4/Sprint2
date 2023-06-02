function ProfileTools(props) {  
    const { user } = props;  

    return (
        <>
            {user && (
                <div className="default-card">
                    <h3>
                        <i className="fa-solid fa-computer icon" title="Técnicas"></i>
                        HERRAMIENTAS
                    </h3>
                    <ul className="profile-data">                        
                        <p>{user.tools_name}</p>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileTools;