import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

import LoadingSpinner from "./LoadingSpinner";

const RenderTable = ({ users, loading }) => {
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      <table className="table mt-5 text-center">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name.split(" ").slice(0, -1).join(" ")}</td>
              <td>{user.name.split(" ").slice(-1).join(" ")}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <Link to={`/users/${user.id}`}>
                  <Button variant="outline-dark"> Ver Detalhes</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default RenderTable;
