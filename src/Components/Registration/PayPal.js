import React , {Component} from 'react';
import {Card,CardBody,CardFooter,Button} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class PayPal extends Component {
    constructor(){
        super();
        
    }

    render(){
        return(
        <>
        <Card>
            <CardBody>
                <center>
                <strong>Click the PayPal button to login</strong>
                <p>
                    You'll be prompted for your PayPal account email and password through a secure login form
                </p>
                </center>
            </CardBody>
            <CardFooter>
                <Button>PayPal</Button>
                <div className="mt-2"><Link to="/courseDetails">Continue to explore courses</Link></div>
            </CardFooter>
        </Card>
        </>
        );
   }
}