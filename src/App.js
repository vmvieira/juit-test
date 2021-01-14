import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import axios from "axios";

import TestHeader from "./components/TestHeader";

function App() {
  return (
    <Container className="text-center">
      <TestHeader testType="React" />
    </Container>
  );
}

export default App;
