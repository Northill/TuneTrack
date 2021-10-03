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
            <Link className='Song' style={{ textDecoration: 'none', color: 'black' }} to={
                { 
                    pathname:'/song', 
                }  }>
                <div className='Songinner'>
                    <img className='SongCover' src={this.props.img} />        
                    <h1>
                    {   this.props.name} 
                    </h1>
                </div>
            </Link>
        )
    }
}

export default Song;

