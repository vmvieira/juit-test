import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";

import TestHeader from "./TestHeader";
import RenderTable from "./RenderTable";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    sort: "id",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(
          `http://localhost:3004/users?_page=${pagination.page}&_limit=5&_sort=${pagination.sort}`
        );
        setUsers([...response.data]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();
  }, [pagination]);

  return (
    <div className="text-center">
      <TestHeader testType="React" />

      <RenderTable users={users} loading={loading} />
      <div className="d-flex justify-content-center mt-5">
        <ButtonGroup className="mr-5" aria-label="First group">
          <Button
            variant="secondary"
            onClick={() => setPagination({ ...pagination, page: 1 })}
          >
            1
          </Button>{" "}
          <Button
            variant="secondary"
            onClick={() => setPagination({ ...pagination, page: 2 })}
          >
            2
          </Button>{" "}
          <Button
            variant="secondary"
            onClick={() => setPagination({ ...pagination, page: 3 })}
          >
            3
          </Button>{" "}
          <Button
            variant="secondary"
            onClick={() => setPagination({ ...pagination, page: 4 })}
          >
            4
          </Button>
        </ButtonGroup>
        <DropdownButton
          variant="dark"
          id="dropdown-basic-button"
          title="Ordenar Por"
          className="ml-5"
        >
          <Dropdown.Item
            onClick={() => setPagination({ ...pagination, sort: "id" })}
          >
            Id
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => setPagination({ ...pagination, sort: "age" })}
          >
            Idade
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <Link to="/">
        <Button variant="outline-dark" className="my-5">
          Voltar
        </Button>
      </Link>
    </div>
  );
};

export default UsersTable;
