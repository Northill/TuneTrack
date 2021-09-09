// CSS:
import '../App.css';

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
                <div className='tDiv'>
                <Card className='tCard'>
                    <Card.Title id='loginTitle' align='center'>Tune Track</Card.Title>
                    <Row>
                        <Col></Col>
                        <Col>
                            <img id='logo' src='/tuneLogo.svg' />
                        </Col>
                        <Col></Col>
                    </Row>
                    <LoginForm />
                    <Button id='loginButton'>Login</Button>
                </Card>
                </div>
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
                <div>
                    <img src='/googleAuth.png' />
                </div> 
            </Col>
        </Row>
    )
}

const LoginForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='tFormText' type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className='tFormText' type="password" placeholder="Password" />
            </Form.Group>
        </Form>
    )
}
// Text box for login or sign up:
// Buttons for email login:

export default Login;