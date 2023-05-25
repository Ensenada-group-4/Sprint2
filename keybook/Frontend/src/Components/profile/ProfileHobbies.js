import React, { useState, useEffect } from 'react';

function ProfileHobbies() {
    const [hobby, setHobby] = useState(null);

    useEffect(() => {
        const fetchHobby = async () => {
            try {
                const userId = localStorage.getItem('userId');
                const response = await fetch(`http://localhost:3000/users/user/${userId}`);
                const data = await response.json();
                setHobby(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchHobby();
    }, []);

    return (
        <>
            {hobby && (
                <div class="default-card">
                    <h4>
                        INTERESES y HOBBIS
                    </h4>
                    <ul class="profile-data">
                        <li>Listado de intereses</li>
                        <p>{hobby.hobby_name}</p>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileHobbies;