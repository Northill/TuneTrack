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


export default TaskButton;