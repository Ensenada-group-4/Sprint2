import React, { useState, useEffect } from 'react';

function ProfileTools(props) {
    // const [Tools, setTools] = useState(null);
    const { user } = props;

    // useEffect(() => {
    //     const fetchTools = async () => {
    //         try {
    //             // const userId = localStorage.getItem('userId');
    //             const response = await fetch(`http://localhost:3000/users/user/${userId}`);
    //             const data = await response.json();
    //             setTools(data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchTools();
    // }, [userId]);

    return (
        <>
            {user && (
                <div className="default-card">
                    <h4>
                        <i className="fa-solid fa-computer icon" title="Técnicas"></i>
                        HERRAMIENTAS
                    </h4>
                    <ul className="profile-data">
                        <li>Listado de habilidades</li>
                        <p>{user.tools_name}</p>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileTools;