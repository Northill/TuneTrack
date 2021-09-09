import './App.css';
import React, { Component } from 'react';

// Bootstrap components:
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';  
import Navbar from 'react-bootstrap/NavBar';

// Import my components:
import Login from './Components/Login';
import Home from './Components/Home';

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      View: 'login'
    }

    // Bind functions:
    this.loginSubmit = this.loginSubmit.bind(this);

  }

  loginSubmit(arg) {
    console.log(arg);

    this.setState(state => ({
      View: 'home'
    }));
  }

  render() {
    console.log(this.state.View);

    let ui;
    let nav;

    if (this.state.View == 'home') {
      ui = <Home />
    } else if (this.state.View == 'login') {
      ui = <Login action={this.loginSubmit}/>
    }

    if (this.state.View != 'login') {
      nav = <Navigation />;
    }

    return (
      <>
      {
        nav
      }
        <Container>
          {
            ui
          }
        </Container>
      </>
    );
  }
}

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default App;
