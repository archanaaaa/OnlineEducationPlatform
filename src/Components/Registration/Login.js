import React , {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import {Container,FormGroup,Row,Col,Label,Input,Button,Card,CardBody,CardHeader,CardFooter,Form,FormFeedback} from 'reactstrap';


export default class Login extends Component {
    constructor(){
        super();
        this.state = {
          email: null,
          password: null,
          isSuccess: false,
          isError: false,
        };
        this.onChange = this.onChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    handleLogin = (e) => {
      e.preventDefault();
  
      if (
        this.state.email === "myaccount" &&
        this.state.password !== ""
      ) {
        this.setState({
          isSuccess: true,
        });
      }else
      {
        this.setState({ isError: true });
      }
    };
    

    render(){
      if (this.state.isSuccess) {
        return <Redirect to="/courseDetails" />;
      } else if (this.state.isError) {
        return (
          <div>Invalid Credentials , Please try again !</div>
        );
      }
        return(
          <>
            <Container>
            <Col md={6} className="offset-md-3">
            <Card>
            <CardHeader><h3>Login into your account</h3></CardHeader>
            
            <Form className="form" onSubmit={this.handleLogin}>
            <CardBody>
              <Col>
                <FormGroup>
                  <Label>UserName</Label>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="UserName"
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              </CardBody>
              <CardFooter>
              <Button>Login</Button>
              <p className="mt-3"> Don't have an account ? <Link to="/signUp"> Sign Up</Link></p>
            </CardFooter>
            </Form>
          </Card>
          </Col>
          </Container>
          
          </>
            );
        }
    }