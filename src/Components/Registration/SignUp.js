import React, { Component } from "react";
import {Container,FormGroup,Row,Col,Label,Input,Button,Card,CardBody,CardHeader,CardFooter,Form,FormFeedback} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import Header from "./Header";

export default class SignUp extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <>
            <Header/>
            <Container>
            <Col md={8} className="offset-md-2">
            <Card>
            <Form>
                <CardHeader><h3>Sign In</h3></CardHeader>
            <CardBody>
            <Row form>
                <Col md={6}>
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="dob">Date of Birth</Label>
                <Input type="date" name="dob" id="dob" placeholder="Date of Birth"/>
            </FormGroup>
            <FormGroup>
                <Label for="eduQual">Educational Qualification</Label>
                <Input type="text" name="eduQual" id="eduQual" placeholder="Your Educational Qualification"/>
            </FormGroup>
            <Row form>
                <Col md={6}>
                <FormGroup>
                    <Label for="designation">Designation</Label>
                    <Input type="text" name="designation" id="designation" placeholder="designation"/>
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="company">Company</Label>
                    <Input type="text" name="company" id="company" placeholder="company"/>
                </FormGroup>
                </Col>
            </Row>
            </CardBody>
            <CardFooter><Link to="/contactDetails"> Next</Link>
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
