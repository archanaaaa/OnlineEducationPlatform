import React , {Component} from 'react';
import {Jumbotron,Container,Row,Col} from 'reactstrap';
import PaymentOptions from './NavigationTab';

export default class CheckOut extends Component {
    constructor(){
        super();
        
    }

    render(){
        return(
            <>

            
                <Container fluid style={{backgroundColor : "#F0F8FF", height : 100}}>
                <div style={{height : 30}}></div>    
                    <h4>Register and get started with your course !</h4>
                 </Container>
            
            
            <Container>
                <Row>
                    <Col md={6} className="offset-md-3">
                    <PaymentOptions/>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}