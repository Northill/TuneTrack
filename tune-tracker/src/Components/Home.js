// Import React:
import React, { cloneElement, Component } from 'react';

// Import Bootstrap:
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import my components:
import Song from './Song';
import Container from 'react-bootstrap/esm/Container';

class Home extends Component {
    constructor (props) {
        super (props)

        this.albums = [
            [
                {
                    name: 'Rushing Back',
                    artist: 'Flume',
                    img: '/rushingBack.jpg'
                }, 
                {
                    name: 'Quirk',
                    artist: 'Flume',
                    img: '/quirk.jpg'
                },
                {
                    name: 'Candy 02',
                    artist: 'Louis the Child',
                    img: '/candy2.jpg'
                }  
            ],
            [
                {
                    name: 'Rushing Back',
                    artist: 'Flume',
                    img: '/rushingBack.jpg'
                }, 
                {
                    name: 'Quirk',
                    artist: 'Flume',
                    img: '/quirk.jpg'
                },
                {
                    name: 'Candy 02',
                    artist: 'Louis the Child',
                    img: '/candy2.jpg'
                }  
            ],
        ]
    }

    render () {

        this.albums.map((i) => {
            i.map((x) => {
                console.log(x);
            });
        });

        return (
            <>
                <Container>
                <h1>Your Songs</h1>
                {
                    this.albums.map((i) => {
                        return <Row>{
                                i.map((x) => {
                                    return <Col><Song img={x.img} name={x.name}/></Col>
                                })
                            }</Row>
                    })
                }
                </Container>
            </>
        )
    }
}

export default Home;