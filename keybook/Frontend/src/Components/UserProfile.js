//se puede borrar
// import React, { useEffect, useState } from 'react';

// function UserProfile() {
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         async function getUser() {
//             const id = localStorage.getItem('userId');

//             try {
//                 const response = await fetch(`http://localhost:3000/users/${id}`);
//                 const data = await response.json();
//                 setUserData(data);
//             } catch (error) {
//                 console.log('Ocurrió un error al solicitar los datos:', error);
//             }
//         }

//         getUser();
//     }, []);

//     if (!userData) {
//         return <div>Cargando datos del perfil...</div>;
//     }

//     return (
//         <div className="user-profile">
//             <h2 id="profile-fullName">
//                 {userData.name} {userData.last_name}
//             </h2>
//             <button className="btn btn-outline-warning btn-sm">Editar</button>
//             <div>
//                 <h5 id="profile-location">{userData.city}</h5>
//                 <h5 className="profile-loc-country">{userData.country}</h5>
//                 <h5 className="profile-birthDate">{userData.date_of_birth}</h5>
//             </div>
//             <div className="user-bio profile-data">
//                 <img
//                     className="avatar avatar-perfil"
//                     src={userData.profile_picture}
//                     alt="avatar"
//                 />
//                 <p>{userData.bio}</p>
//             </div>
//             {/* Resto del contenido del perfil */}
//         </div>
//     );
// }

// export default UserProfile;

