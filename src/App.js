import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Services from "./Our-Services/Services";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./TermsOfService/TermsOfService";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services/" component={Services} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/contact/" component={Contact} />
        <Route exact path="/login/" component={Login} />
        <Route exact path="/signup/" component={Signup} />
        <Route exact path="/privacy-policy/" component={PrivacyPolicy} />
        <Route exact path="/terms-of-service/" component={TermsOfService} />
      </Switch>
    </Router>
  );
};

export default App;
