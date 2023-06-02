import React, { useState, useEffect } from 'react';

function ProfileHobbies(props) {
    const { user } = props;

    return (
        <>
            {user && (
                <div className="default-card">
                    <h3>
                        INTERESES y HOBBIS
                    </h3>
                    <ul className="profile-data">                        
                        <p>{user.hobby_name}</p>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileHobbies;