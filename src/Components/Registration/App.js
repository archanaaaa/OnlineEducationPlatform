import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import ContactDetails from "./ContactDetails";
import Home from "./Home";
import SignUp from "./SignUp";
import CheckOut from "./CheckOut";

export default class App extends Component {
    render() {
      return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signUp" component={SignUp} />
            <Route path="/courseDetails" component={CourseDetails} />
            <Route path="/contactDetails" component={ContactDetails} />
            <Route path="/checkOut" component={CheckOut}/>
        </Switch>
    </BrowserRouter>
    );
  }
}