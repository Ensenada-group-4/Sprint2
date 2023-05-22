import React, { useState, useEffect } from 'react';
import SearchBarUsers from './SearchBarUsers';

function UsersGrid() {
    const [userList, setUserList] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        // Lógica para obtener todos los usuarios al cargar la página
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/users');
                const data = await response.json();
                setUserList(data);
                setFilteredResults(data);
            } catch (error) {
                console.log('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleSearchResults = (results) => {
        setFilteredResults(results);
    };

    const handleSearchKeyChange = (event) => {
        setSearchKey(event.target.value);
        if (event.target.value === '') {
            setFilteredResults(userList);
        }
    };

    return (
        <main>
            {/* Menú búsqueda amigos */}
            <div className="container main-structure">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="contenedor-amigos">
                            <div className="search-friends default-card">
                                <label htmlFor="">
                                    <h4>COMUNIDAD</h4>
                                </label>
                                <SearchBarUsers
                                    onSearchResults={handleSearchResults}
                                    searchKey={searchKey}
                                    setSearchKey={setSearchKey}
                                    userList={userList}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menú amigos */}
            <div className="container main-structure">
                <article className="row friends-row">
                    {/* Renderizar los resultados de búsqueda en el artículo */}
                    {filteredResults.map((userData) => (
                        <div className="col-sm-3 default-card friend-box" key={userData.id}>
                            <img
                                className="friend-avatar"
                                style={{ borderRadius: '50%', width: '150px', height: '150px' }}
                                src={userData.profile_picture}
                                alt={userData.name}
                            />
                            <a>{userData.name}</a>
                            <p>{userData.email}</p>
                            <button className="btn btn-outline-warning btn-sm">Send Request</button>
                        </div>
                    ))}
                </article>
            </div>
        </main>
    );
}
export default UsersGrid;