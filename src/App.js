import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Notes from './pages/notes/index.js'
import Register from './pages/register/index.js'
import Login from './pages/login/index.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      token: null
    };
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">INote</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav>
              {!isLoggedIn ? (
                <React.Fragment>
                  <Nav.Link href="/register">Register</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </React.Fragment>
              ) : (
                  <Nav.Link href="#" onClick={this.logout}>Log out</Nav.Link>
                )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Notes isLoggedIn={isLoggedIn} />
          </Route>
        </Switch>
      </Router>
    );
  }

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  componentDidMount = () => {
    setTimeout(() => this.setState({ isLoggedIn: true }), 1000);
    ;
  }
}

export default App;
