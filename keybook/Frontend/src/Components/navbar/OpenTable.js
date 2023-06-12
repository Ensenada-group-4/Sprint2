import React, { useState, useEffect } from "react";
import { faTable, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Table } from "react-bootstrap";
import getRequest from "../../utils/getRequest";
import { ButtonDefault } from "../buttons/ButtonDefault";
import ReactPaginate from "react-paginate";
import PrintButton from "../buttons/PrintButton";
function FaTableButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [isActivePage, setIsActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPageItems, setCurrentPageItems] = useState([]);

  async function fetchUsers(pageNumber) {
    console.log("Obtener datos de la página:", pageNumber);
    try {
      const response = await getRequest({
        endpoint: `users/user`,
        params: { page: pageNumber, limit: 10 },
      });
      setUsers(response);
      setTotalPages(Math.ceil(response.length / 10));
      setCurrentPageItems(
        response.slice((pageNumber - 1) * 10, pageNumber * 10)
      );
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (isActivePage > 0) {
      fetchUsers(isActivePage);
    }
  }, [isActivePage]);

  function handlePageClick(data) {
    setIsActivePage(data.selected + 1);
  }
  function handleReplyClick() {
    setIsOpen(true);
    fetchUsers(isActivePage);
  }

  function handleCloseClick() {
    setIsOpen(false);
  }

  const handlePageChange = (data) => {
    console.log("Cambiando de página a:", data.selected);
    setIsActivePage(data.selected);
  };
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
                    {currentPageItems.map((user) => (
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
                    <PrintButton users={users} />
                    <ReactPaginate
                      pageCount={totalPages}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination"}
                      activeClassName={"active"}
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
