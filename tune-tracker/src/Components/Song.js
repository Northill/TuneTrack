// Import CSS:
import '../App.css'

// Import React:
import React, { Component } from 'react';

// Import react router:
import { Link } from 'react-router-dom'; 

class Song extends Component {
    constructor (props) {
        super (props)

    }

    render () {
        return (
            <div className='Song'>
                <img className='SongCover' src={this.props.img} />
                <h1>
                    <Link to={
                        { 
                            pathname:'/song', 
                        }  }>{this.props.name} 
                        </Link>
                </h1>
            </div>
        )
    }
}

export default Song;

