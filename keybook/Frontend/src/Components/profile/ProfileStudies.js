import React, { useState, useEffect } from 'react';

function ProfileStudies() {
    const [studies, setStudie] = useState(null);

    useEffect(() => {
        const fetchStudie = async () => {
            try {
                const userId = localStorage.getItem('userId');
                const response = await fetch(`http://localhost:3000/users/user/${userId}`);
                const data = await response.json();
                setStudie(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStudie();
    }, []);

    return (
        <>
            {studies && (
                <div class="default-card">
                    <h4>
                        FORMACION
                    </h4>
                    <ul class="profile-data">
                        <a id="formacion">
                            <p>Títulación</p>
                            <p>{studies.studies_course}</p>
                        </a>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileStudies;