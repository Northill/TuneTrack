// CSS:
import '../App.css';

// React:
import React, { Component } from 'react';

// React Router:
import { Link } from 'react-router-dom';

// Bootstrap:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Firebase Components:
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

class Login extends Component {
    constructor(props) {
        super (props);
        
        this.state = {
            email: '',
            password: ''
        }

        // Bind the submit button to access state:
        this.submitButton = this.submitButton.bind(this);
    }

    submitButton() {
        this.props.action('submit');
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
                        <Link to='/home'><Button id='loginButton'>Submit</Button></Link>
                    </Card>
                </div>
            </>
        );
    }
}

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

class LoginForm extends Component {
    constructor (props) {
        super (props)

    }

    render() {
        return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='tFormText' type="email" placeholder="Enter email" onChange={e => this.setState({ email: e.target.value })}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className='tFormText' type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })}/>
            </Form.Group>
        </Form>
        )
    }
}

export default Login;