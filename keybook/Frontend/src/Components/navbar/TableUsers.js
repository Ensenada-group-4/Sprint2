import React, { useState, useEffect } from "react";
import { Modal, Table } from "react-bootstrap";
import request from "../../utils/getRequest";
import { ButtonDefault } from "../buttons/ButtonDefault";

function TableUser({ onReply }) {
  const [replyText, setReplyText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await request({
        method: "get",
        endpoint: "/users/json",
      });
      setUsers(response);
    } catch (error) {
      console.error(error);
    }
  }
  function handleReplyClick() {
    setIsOpen(true);
  }

  function handleCloseClick() {
    setIsOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onReply(replyText);
    setReplyText("");
    setIsOpen(false);
  }

  return (
    <div>
      <button className="reply btn btn-warning" onClick={handleReplyClick}>
        Responder
      </button>
      {isOpen && (
        <div className="reply default-card">
          <form onSubmit={handleSubmit}>
            <Modal.Title>Lista de usuarios</Modal.Title>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>ID de usuario</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Contraseña</th>
                  <th>Fecha de nacimiento</th>
                  <th>Perfil de usuario</th>
                  <th>Ciudad</th>
                  <th>País</th>
                  <th>Teléfono</th>
                  <th>Herramientas</th>
                  <th>Cursos de estudios</th>
                  <th>Idioma</th>
                  <th>Hobby</th>
                  <th>LinkedIn</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>ID: {user.id}</td>
                    <td>ID de usuario: {user.userId}</td>
                    <td>Nombre: {user.firstName}</td>
                    <td>Apellido: {user.lastName}</td>
                    <td>Email: {user.email}</td>
                    <td>Password: {user.password}</td>
                    <td>Fecha de nacimiento: {user.dateOfBirth}</td>
                    <td>Perfil de usuario: {user.profilePicture}</td>
                    <td>Ciudad: {user.city}</td>
                    <td>País: {user.country}</td>
                    <td>Teléfono: {user.phone}</td>
                    <td>Herramientas: {user.toolsName}</td>
                    <td>Cursos: {user.studiesCourse}</td>
                    <td>Idioma: {user.languageName}</td>
                    <td>Hobby: {user.hobbyName}</td>
                    <td>LinkedIn: {user.linkedin}</td>
                    <td>Rol: {user.role}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <ButtonDefault
              className="buttonLike btn btn-lg"
              onClick={handleCloseClick}
              id="close-button"
              title="Cerrar"
            >
              Cerrar
            </ButtonDefault>
          </form>
        </div>
      )}
    </div>
  );
}
export default TableUser;
