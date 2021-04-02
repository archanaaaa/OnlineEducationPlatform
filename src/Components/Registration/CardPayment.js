import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import {Card,CardBody,CardFooter,Form,Label,FormGroup,Input,Button,FormText,Row,Col} from 'reactstrap';

export default class CardPayment extends Component {
    constructor(){
        super();
        
    }

    render(){
        return(
        <>
        <Card>
            <CardBody>
                <Form>
                    <FormGroup>
                        <Label for="nameOnCard">Name on Card</Label>
                        <Input type="text" name="nameOnCard" id="nameOnCard" placeholder="Enter the name on your card"/>
                    </FormGroup>

                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="cardNumber">Card Number</Label>
                            <Input type="text" name="cardNumber" id="cardNumber" placeholder="Enter your Card Number" />
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="expirationDate">Expiration Date</Label>
                            <Input type="text" name="expirationDate" id="expirationDate" placeholder="MM / YY" />
                        </FormGroup>
                        </Col>
                        <Col md={2}>
                        <FormGroup>
                            <Label for="cvv">CVV</Label>
                            <Input type="text" name="cvv" id="cvv" placeholder="cvv" />
                        </FormGroup>
                        </Col>
                    </Row>
                    
                    <FormGroup>
                        <Label for="country">Country</Label>
                        <Input type="text" name="country" id="country" placeholder="Your Country"/>
                    </FormGroup>

                    <FormGroup check>
                        <Input type="checkbox" name="check" id="check"/>
                        <Label for="check" check>Check me out</Label>
                    </FormGroup>

                    
                </Form>
        
            </CardBody>

            <CardFooter>
                <Button>Make Payment</Button>
                <div className="mt-2"><Link to="/courseDetails">Continue to explore courses</Link></div>
            </CardFooter>
        </Card>
                
        </>
        );
    }
}