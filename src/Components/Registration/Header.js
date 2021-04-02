import React , {Component} from 'react';
import {Container, Jumbotron} from 'reactstrap';

export default class Header extends Component {

 render(){
        return(
            <Jumbotron fluid>
                <Container fluid>
                    <h3>Explore new Courses !</h3>
                    <p className="lead">Start learning and improve your skills now !</p>
                </Container>
            </Jumbotron>
            
        );
    }
}
