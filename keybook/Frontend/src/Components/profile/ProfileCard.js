import React, { useState, useEffect } from 'react';

function ProfileCard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userId = localStorage.getItem('userId');
                const response = await fetch(`http://localhost:3000/users/user/${userId}`);
                const data = await response.json();
                setUser(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []);
    return (
        <>
            {user && (
                <div className="default-card">
                    <div className="profile-details">
                        <div className="profile-info">
                            <h2 id="profile-fullName">{user.name}</h2>
                            <h2> {user.last_name}</h2>
                            <div className="user-bio profile-data">
                                <img
                                    id="profile-avatar"
                                    src={user.profile_picture}
                                    alt="avatar"
                                    className="avatar"
                                />
                            </div>
                            <p>{user.email}</p>
                            <h5>TELÉFONO DE CONTACTO</h5>
                            <p>{user.phone}</p>
                        </div>
                        <div>
                            <h5 id="profile-location">Ciudad</h5>
                            <p>
                                {user.city}
                            </p>
                            <h5 id="profile-loc-country">País</h5>
                            <p>
                                {user.country}
                            </p>
                            <h5 id="profile-birthDate">Año de nacimiento:</h5>
                            <p>
                                {user.date_of_birth}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProfileCard;
