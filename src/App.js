import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Trace from "./Trace/Trace";
import Services from "./Our-Services/Services";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./TermsOfService/TermsOfService";
import Dashboard from "./Dashboard/Dashboard";
import DrugDistribution from "./DrugDistribution/DrugDistribution";
import AddDrug from "./AddDrug/AddDrug";
import TraceDrug from "./TraceDrug/TraceDrug";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trace" component={Trace} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/terms-of-service" component={TermsOfService} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route
          exact
          path="/dashboard/distribution"
          component={DrugDistribution}
        />
        <Route exact path="/dashboard/add-drug" component={AddDrug} />
        {/* <Route exact path="/add-user" component={AddUser} /> */}
        <Route exact path="/dashboard/trace" component={TraceDrug} />
      </Switch>
    </Router>
  );
};

export default App;
