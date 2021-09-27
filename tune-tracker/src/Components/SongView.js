// Import React:
import React, { Component } from 'react';

// React Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 
import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/Button';

// My Components
import TaskButton from './TaskButton';

import ToDo from './Todo';

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
                <h1>Hello</h1>
                <Row>
                    <Col>
                        <Song img={data.img} name={data.name}/>
                    </Col>
                    <Col>
                        {
                            data.toDo.map((x) => {
                                return (
                                    <ToDo name={x.title} />
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