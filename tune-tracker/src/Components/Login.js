// React:
import React, { Component } from 'react';

// Bootstrap:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Login extends Component {
    constructor(props) {
        super (props);
        
    }

    render() {
        return (
            <>
             <Card>
                <Card.Title align='center'>Welcome to Tune Track</Card.Title>
                <OAuthLoginMethods />
                <LoginForm />
             </Card>
            </>
        );
    }
}

// We need:
// Login Method selection Part:
const OAuthLoginMethods = () => {
    return (
        <Row align='center'>
            <Col>
                <Button>oAUth</Button>
            </Col>
            <Col>
                <Button>oAUth</Button>
            </Col>
            <Col>
                <Button>oAUth</Button>
            </Col>
            <Col>
                <Button>oAUth</Button>
            </Col>
        </Row>
    )
}

const LoginForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
// Text box for login or sign up:
// Buttons for email login:

export default Login;