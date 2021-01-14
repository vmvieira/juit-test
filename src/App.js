import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import UsersTable from "./components/UsersTable";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Container>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/users-table" component={UsersTable} />
          <Route exact path="/users/:id" component={UserDetail} />
        </Container>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
