import '../App.css';

// Import React:
import React, { Component } from 'react';

class TaskButton extends Component {
    constructor (props) {
        super (props);

        this.state = {
            isComplete: false
        }

        this.userClick = this.userClick.bind(this);
    }

    userClick () {
        this.setState((state) => ({
            isComplete: true
        }));

        console.log('press');
    }

    render() {

        let colorId;

        if (this.state.isComplete == true) {
            colorId = 'isComplete';
        } else {
            colorId = 'notComplete';
        }

        return (
            <div className='TaskOuter' onClick={this.userClick}>
                <div className='TaskInner' id={colorId} onClick={this.userClick}></div>
            </div>
        )
    }
}

// This is just for the plus Icon:
const AddTaskButton = () => {
    return (
        <div className='TaskOuter'>
            <img id='addButton' src='/add.png' />
        </div>
    )
}


export { TaskButton, AddTaskButton };
