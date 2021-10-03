import './App.css';
import React, { Component } from 'react';

// Import React Router:
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// Bootstrap components:
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';  
import Navbar from 'react-bootstrap/NavBar';

// Import my components:
import Login from './Components/Login';
import Home from './Components/Home';
import Switch from 'react-bootstrap/esm/Switch';
import SongView from './Components/SongView'; 

class App extends Component {

  render() {
    //let ui;
    let nav = <Navigation /> // Assign a variable to the navigation component.

    return (
      <Router>
        {
          nav // Implement the navigation component here.xs
        }
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/song'>
            <SongView />
          </Route>
        </Switch>
      </Router>
    );
  }
}

// Create navigation component.
const Navigation = () => { 
  return (
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="#home">
        <Link style={{ textDecoration: 'none', color: 'black'}} to='/home'>Tune Track</Link>
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Account</Nav.Link>
        <Nav.Link href="#home">About</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default App;
