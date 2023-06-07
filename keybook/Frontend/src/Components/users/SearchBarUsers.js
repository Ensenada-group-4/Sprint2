import React, { useState, useEffect } from "react";
import diacriticless from "diacriticless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import GetUsers from "./GetUsers";
import getRequest from '../../utils/getRequest';

function SearchBarUsers({ onSearchResults }) {
  const [searchKey, setSearchKey] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (searchKey === "") {
      setFilteredResults([]);
    } else {
      filterResults();
    }
  }, [searchKey, users]);

  const filterResults = () => {
    const searchQuery = diacriticless(searchKey.toLowerCase());
    const filteredResults = users.filter((userData) => {
      const { name, email, last_name } = userData;
      const normalizedName = diacriticless(name.toLowerCase());
      const normalizedEmail = diacriticless(email.toLowerCase());
      const normalizedlast_name = diacriticless(last_name.toLowerCase());
      return (
        normalizedName.startsWith(searchQuery) ||
        normalizedEmail.startsWith(searchQuery) ||
        normalizedlast_name.startsWith(searchQuery)
      );
    });
    setFilteredResults(filteredResults);
    setNoResults(filteredResults.length === 0);
    onSearchResults(filteredResults);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchKey.trim() === "") {
      setFilteredResults([]);
      setNoResults(false);
      onSearchResults([]);
      return;
    }
    
    const response = await getRequest({
      endpoint: `users/user?searchKey=${searchKey}`
    })
    setUsers(response)
    filterResults();
  };

  return (
    <>
      <div className="container">
        <div className="search-friends default-card">
          <form className="d-flex" onSubmit={handleSubmit}>
            <span className="input-group-text" id="basic-addon1">
              <input
                className="form-control me-2 search-content-input"
                id="searchFriends"
                type="search"
                name="searchKey"
                placeholder="Búsqueda..."
                aria-label="Buscar"
                size={50}
                value={searchKey}
                onChange={(event) => setSearchKey(event.target.value)}
              />
              <button className="btn btn-outline" type="submit">
                <FontAwesomeIcon icon={faSearch} className="icon search-icon" />
              </button>
              {noResults && (
                <p style={{ color: "red", marginTop: "10px" }}>
                  No se encontraron usuarios.
                </p>
              )}
            </span>
          </form>
        </div>
      </div>
      <div className="container main-structure-grid">
        <div className="row">
          {searchKey.trim() !== "" && filteredResults.length > 0 && (
            <GetUsers users={filteredResults} />
          )}
        </div>
      </div>
    </>
  );
}

export default SearchBarUsers;