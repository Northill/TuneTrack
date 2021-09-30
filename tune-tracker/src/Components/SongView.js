// Import React:
import React, { Component } from 'react';

// React Bootstrap:
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 

// My Components:
import ToDo from './Todo';
import Song from './Song';
import AddTask from './AddTask';

const SongView = () => {

    // Example of the data the will be received from the server:
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

    // Then the front end will append to the array to display an add task:
    let addTask =  {
        title: 'add new task'
    }

    data.toDo.push(addTask);
    
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
                                    <ToDo name={x.title} task={true}/>
                                )
                            })
                        }
                        <AddTask />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

    export default SongView;