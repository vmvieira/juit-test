import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

import TestHeader from "./TestHeader";
import RenderTable from "./RenderTable";
import Pagination from "./Pagination";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get("http://localhost:3004/users");
        console.log(response);
        setUsers([...response.data]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();
    console.log(users);
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="text-center">
      <TestHeader testType="React" />

      <RenderTable users={currentUsers} loading={loading} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />

      <Link to="/">
        <Button variant="outline-dark" className="my-5">
          Voltar
        </Button>
      </Link>
    </div>
  );
};

export default UsersTable;
