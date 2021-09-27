// Import React:
import React, { Component } from 'react';

// React Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 
import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/Button';

// Song view
import Song from './Song';

const SongView = () => {

    let data = {
        name: 'Rushing Back',
        img: '/rushingBack.jpg',
        toDo: [
            { title: 'Mix kick and bass', isComplete: false },
            { title: 'Change chords on chorus', isComplete: false },
            { title: 'Improve the into', isComplete: false },
            { title: 'Remove resonance in vocals', isComplete: false },
        ]
    }
    
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Song img={data.img} name={data.name}/>
                    </Col>
                    <Col>
                        {
                            data.toDo.map((x) => {
                                return (
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <h3>{x.title}</h3>
                                                </Col>
                                                <Col>
                                                    <h3>Complete</h3>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

    export default SongView;