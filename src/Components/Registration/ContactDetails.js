import React, { Component } from "react";
import { Link,Redirect } from "react-router-dom";
import {Container,FormGroup,Row,Col,Label,Input,Button,Card,CardBody,CardHeader,CardFooter,Form,FormFeedback} from 'reactstrap';
import Header from "./Header";

export default class ContactDetails extends Component {
    constructor(){
        super();
        this.state ={
            isSuccess: false,
        }
        this.AccountCreation=this.AccountCreation.bind(this);
    }

    AccountCreation=(e)=>{
        this.setState({
            isSuccess: true,
          });
        alert("Account successfully created !");
    }

    render(){
        if (this.state.isSuccess) {
            return <Redirect to="/courseDetails" />;
          } 
        return(
            <>
            <Header/>
            <Container>
            <Col md={8} className="offset-md-2">
            <Card>
            <Form>
                <CardHeader><h3>Contact Details</h3></CardHeader>
            <CardBody>
            <Row form>
                <Col md={6}>
                <FormGroup>
                    <Label for="line1">Address Line 1</Label>
                    <Input type="text" name="line1" id="line1" placeholder="Line 1" />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="line2">Address Line 2</Label>
                    <Input type="text" name="line2" id="line2" placeholder="Line 2" />
                </FormGroup>
                </Col>
            </Row>
            
            <Row form>
                <Col md={6}>
                <FormGroup>
                    <Label for="city">City</Label>
                    <Input type="text" name="city" id="city" placeholder="city"/>
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="pincode">Pin Code</Label>
                    <Input type="text" name="pincode" id="pincode" placeholder="pincode"/>
                </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="mobile">Mobile Number</Label>
                <Input type="text" name="mobile" id="mobile" placeholder="Mobile number"/>
            </FormGroup>
            <FormGroup>
                <Label for="email">Email Id</Label>
                <Input type="email" name="email" id="email" placeholder="Your Email Id"/>
            </FormGroup>
            </CardBody>
            <CardFooter><Button onClick={this.AccountCreation}>Create your account</Button>
            <div className="mt-3">Already have an account ? <Link to="/"> Login</Link></div>
            </CardFooter>
           
            </Form>
            </Card>
            </Col>
            </Container>
            </>
        );
    }
}
