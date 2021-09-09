import './App.css';
import React, { Component } from 'react';

// Bootstrap components:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Import my components:
import Login from './Components/Login';

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      View: 'login'
    }

  }

  render() {
    console.log(this.state.View);
    return (
      <>
        <Container>
          <Login />
        </Container>
      </>
    );
  }
}

export default App;
