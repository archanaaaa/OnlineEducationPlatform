import React , {Component} from 'react';
import {Container} from 'reactstrap';
import Header from './Header';
import Login from './Login';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <>
            <Header/>
            <Login/>
            </>
            
        );
    }
}
