// Import CSS:
import '../App.css'

// Import React:
import React, { Component } from 'react';

class Song extends Component {
    constructor (props) {
        super (props)

    }

    render () {
        return (
            <div className='Song'>
                <img className='SongCover' src={this.props.img} />
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default Song;