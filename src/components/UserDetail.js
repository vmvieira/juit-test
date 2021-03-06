import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import axios from "axios";

import LoadingSpinner from "./LoadingSpinner";
import TestHeader from "./TestHeader";

const UserDetail = (props) => {
  const { id } = props.match.params;
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState({
    id: 0,
    name: "",
    username: "",
    age: 0,
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(`http://localhost:3004/users/${id}`);
        setUser({ ...response.data });
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  }, [id]);

  function renderDetails() {
    if (loading) {
      return <LoadingSpinner />;
    }

    return (
      <div className="d-flex justify-content-around align-items-center">
        <ul>
          <li>
            <strong>ID:</strong> {user.id}
          </li>
          <li>
            <strong>Name:</strong> {user.name}
          </li>
          <li>
            <strong>Username:</strong> {user.username}
          </li>
          <li>
            <strong>Age:</strong> {user.age}
          </li>
          <li>
            <strong>Email:</strong> {user.email}
          </li>
          <li>
            <strong>Address:</strong>
            <ul>
              <li>
                <strong>Street:</strong> {user.address.street}
              </li>
              <li>
                <strong>Suite:</strong> {user.address.suite}
              </li>
              <li>
                <strong>City:</strong> {user.address.city}
              </li>
              <li>
                <strong>Zipcode:</strong> {user.address.zipcode}
              </li>
              <li>
                <strong>Geo:</strong>
                <ul>
                  <li>
                    <strong>Lat:</strong> {user.address.geo.lat}
                  </li>
                  <li>
                    <strong>Lng:</strong> {user.address.geo.lng}
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Phone:</strong> {user.phone}
          </li>
          <li>
            <strong>Website:</strong> {user.website}
          </li>
          <li>
            <strong>Company:</strong>
            <ul>
              <li>
                <strong>Name:</strong> {user.company.name}
              </li>
              <li>
                <strong>Catch Phrase:</strong> {user.company.catchPhrase}
              </li>
              <li>
                <strong>BS:</strong> {user.company.bs}
              </li>
            </ul>
          </li>
        </ul>
        <div>
          <img
            src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${user.address.geo.lng},${user.address.geo.lat},1,0/250x250?access_token=pk.eyJ1Ijoidm12aWVpcmEiLCJhIjoiY2tqeGkyajlhMDM2bjJuczJzYmR0eGU2eCJ9.ocosSye1WphiADLP_6JqvQ`}
            alt="a geolocation map"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <TestHeader testType="React" />
      <Container>
        {renderDetails()}
        <div className="text-center">
          <Link to="/users-table">
            <Button variant="outline-dark" className="my-5">
              Voltar
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default UserDetail;
