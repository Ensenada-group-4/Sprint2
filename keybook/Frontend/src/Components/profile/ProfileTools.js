import React, { useState, useEffect } from 'react';

function ProfileTools() {
    const [Tools, setTools] = useState(null);

    useEffect(() => {
        const fetchTools = async () => {
            try {
                const userId = 1;
                const response = await fetch(`http://localhost:3000/tools/${userId}`);
                const data = await response.json();
                setTools(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTools();
    }, []);

    return (
        <>
            {Tools && (
                <div class="default-card habilidades">
                    <h4>
                        <i class="fa-solid fa-computer icon" title="Técnicas"></i>
                        HERRAMIENTAS
                    </h4>
                    <ul class="profile-data">
                        <li>Listado de habilidades</li>
                        <p>{Tools.tools_name}</p>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileTools;