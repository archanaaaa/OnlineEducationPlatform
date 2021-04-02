import React, { Component } from "react";
import {Badge,Container,FormGroup,Row,Col,Label,Input,Button,Card,CardBody,CardHeader,CardFooter,Form,FormFeedback, CardText} from 'reactstrap';
import Header from "./Header";
import { Link,Redirect } from "react-router-dom";

export default class CourseDetails extends Component {
    constructor(){
        super();
        this.state = {
            purchaseFlag: false,
          };
          this.onPurchase = this.onPurchase.bind(this);
    }

    onPurchase=(e)=>{
        this.setState({
            purchaseFlag: true,
          });
    }

    render(){
        if (this.state.purchaseFlag) {
            return <Redirect to="/checkOut" />;
          } 
        return(
            <>
            <Header/>
            <Container className="offset-md-2">
                <Row>
                <Col md={4}>
                <Card>
                <CardHeader><h4>Devops</h4></CardHeader>
                <CardBody>
                <CardText>Learn Docker with Hands On Coding Exercises.If you are a beginner in DevOps, this is just the course for you.</CardText>
                <h5><Badge color="secondary">$70</Badge></h5>
                </CardBody>
                <CardFooter>
                    <Button onClick={this.onPurchase}>Purchase</Button>
                </CardFooter>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                <CardHeader><h4>Cloud Computing</h4></CardHeader>
                <CardBody>
                <CardText>Start your Cloud Journey with us - Learn the fundamentals, platforms of Cloud Computing and much more !</CardText>
                <h5><Badge color="secondary">$62</Badge></h5>
                </CardBody>
                <CardFooter>
                    <Button onClick={this.onPurchase}>Purchase</Button>
                </CardFooter>
                </Card>
                </Col>
                </Row>
            </Container>
            
            </>
        );
    }
}
