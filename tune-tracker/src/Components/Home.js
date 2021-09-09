// Import React:
import React, { Component } from 'react';

// Import my components:
import Song from './Song';

class Home extends Component {
    constructor (props) {
        super (props)

        this.albums = [
            {
                name: 'Rushing Back',
                artist: 'flume',
                img: '/rushingBack.jpg'
            }, 
            {
                name: 'Hyperreal',
                artist: 'flume',
                img: ''
            }   
        ]
    }

    render () {
        return (
            <>
                <h1>Home</h1>
                <Song img='/rushingBack.jpg' name={this.albums[0].name}/>
            </>
        )
    }
}

export default Home;