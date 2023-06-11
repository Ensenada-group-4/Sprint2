import React, { useState, useEffect } from "react";
import { faTable, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Table } from "react-bootstrap";
import getRequest from "../../utils/getRequest";
import { ButtonDefault } from "../buttons/ButtonDefault";
import { Pagination } from "react-bootstrap";

function FaTableButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const itemsCountPerPage = 10;

  async function fetchUsers(pageNumber) {
    try {
      const response = await getRequest({
        endpoint: `users/user`,
        params: { page: pageNumber, limit: 10 },
      });
      setUsers(response.slice(0, 10));
      setTotalItemsCount(response.length);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (activePage > 0) {
      fetchUsers(activePage);
    }
  }, [activePage]);

  function handleReplyClick() {
    setIsOpen(true);
    fetchUsers(activePage);
  }

  function handleCloseClick() {
    setIsOpen(false);
  }
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const startIndex = (activePage - 1) * itemsCountPerPage;
  const endIndex = startIndex + itemsCountPerPage;

  const currentItems = users.slice(startIndex, endIndex);

  return (
    <>
      <button className={`dropdown-item`} onClick={handleReplyClick}>
        <FontAwesomeIcon
          icon={faTable}
          className="icon"
          title="Tabla Usuarios"
        />
      </button>
      <div>
        <div className="col-sm-7 col-md-6 col-lg-6 ">
          {isOpen && (
            <div className="centered-div">
              <div className="centered-table">
                <Table
                  striped
                  bordered
                  hover
                  className="custom-table table-auto table-sm table-responsive"
                >
                  <thead>
                    <Modal.Title>Lista de usuarios</Modal.Title>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Email</th>
                      <th>Fecha de nacimiento</th>
                      <th>Ciudad</th>
                      <th>País</th>
                      <th>Teléfono</th>
                      <th>Idioma</th>
                      <th>LinkedIn</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user = { currentItems }) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.date_of_birth}</td>
                        <td>{user.city}</td>
                        <td>{user.country}</td>
                        <td>{user.phone}</td>
                        <td>{user.language_Name}</td>
                        <td>{user.linkedin}</td>
                        <td>{user.role}</td>
                      </tr>
                    ))}
                    <ButtonDefault
                      content="Cerrar"
                      className="buttonLike btn btn-lg"
                      onClick={handleCloseClick}
                      id="close-button"
                    />
                    <ButtonDefault
                      content="Imprimir"
                      className="buttonLike btn btn-lg"
                      onClick={handleCloseClick}
                      id="close-button"
                    />
                    <Pagination
                      activePage={activePage}
                      itemsCountPerPage={itemsCountPerPage}
                      totalItemsCount={totalItemsCount}
                      pageRangeDisplayed={10}
                      onChange={handlePageChange}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </tbody>
                </Table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default FaTableButton;
