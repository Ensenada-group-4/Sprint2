import React, { useState, useEffect } from "react";
import diacriticless from "diacriticless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import GetUsers from "./GetUsers"; 
import { url } from "../../utils/url";

function SearchBarUsers({ onSearchResults }) {
  const [searchKey, setSearchKey] = useState("");
  const [userList, setUserList] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (searchKey === "") {
      setFilteredResults(userList);
    }
  }, [searchKey, userList]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(url + `users/user?searchKey=${searchKey}`);
    const data = await response.json();
    setUserList(data);
    const filteredResults = data.filter((userData) => {
      const { name, email } = userData;
      const searchQuery = diacriticless(searchKey.toLowerCase());
      const normalizedName = diacriticless(name.toLowerCase());
      return (
        normalizedName.includes(searchQuery) ||
        email.toLowerCase().includes(searchQuery)
      );
    });
    setFilteredResults(filteredResults);
    if (filteredResults.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
    onSearchResults(filteredResults);
  };

  return (
    <>
      <div className="container ">
        <div className="search-friends default-card">
          <h4>COMUNIDAD</h4>
          <form id="find-user-form" className="d-flex" onSubmit={handleSubmit}>
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
      <div className="container main-structure-grid ">
        <div className="row">
          {filteredResults.length > 0 && (
            <GetUsers users={filteredResults} />
          )}</div>
      </div>



    </>
  );
}

export default SearchBarUsers;