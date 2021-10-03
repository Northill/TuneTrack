// Import React:
import React, { Component } from 'react';

// Import React Bootstrap Components:
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { AddTaskButton } from './TaskButton';

class AddTask extends Component {
    constructor(props) {
        super (props);

        this.state = {
            formComplete: false,
            data: ''
        }
    }

    render() {
        return (
            <div className='ToDo'>
                <ul id='taskList'> 
                    <li class='taskLi' id='item1'>
                        <Form.Control className='Input' size='sm' type='text' placeholder='Add Task' />
                    </li>
                    <li class='taskLi' id='item2'>
                        <AddTaskButton />
                    </li>
                </ul>
            </div>
        )
    }
}

export default AddTask;