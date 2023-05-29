import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <div className="col-8 search-bar ">
      <form className="d-flex">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <input
              className="form-control me-2 search-content-input"
              type="search"
              placeholder="Búsqueda..."
              aria-label="Buscar"
              size={50}
            />
            <FontAwesomeIcon icon={faSearch} className="icon search-icon" />
          </span>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
