import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Heading2 = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
};

const InputField = ({
  divClassName,
  className,
  placeholder,
  type,
  name,
  id,
}) => {
  return (
    <div className={divClassName}>
      <input
        placeholder={placeholder}
        className={className}
        type={type}
        name={name}
        id={id}
        required
      />
    </div>
  );
};

const SignupButton = ({ divClassName, className, type, value }) => {
  return (
    <div className={divClassName}>
      <input className={className} type={type} value={value} />
    </div>
  );
};

const LoginLink = ({ divClassName, className, toLink, value, text }) => {
  return (
    <div className={divClassName}>
      <p>
        {value}{" "}
        <Link className={className} to={toLink}>
          {text}
        </Link>
      </p>
      |
      <p>
        <Link className={className} to={"/"}>
          {"Home"}
        </Link>
      </p>
    </div>
  );
};

const FormContents = ({ divClassName }) => {
  return (
    <div className={divClassName}>
      <Heading2 text="Sign Up" />
      <InputField
        divClassName="signup-name-section signup-input-section"
        className="name signup-input"
        placeholder="Full name"
        type="text"
        name="name"
        id="name"
      />
      <InputField
        divClassName="signup-company-section signup-input-section"
        className="signup-company signup-input"
        placeholder="Company/Business Name"
        type="text"
        name="company"
        id="company"
      />
      <InputField
        divClassName="signup-email-section signup-input-section"
        className="signup-email signup-input"
        placeholder="E-mail address"
        type="email"
        name="email"
        id="email"
      />
      <InputField
        divClassName="signup-password-section signup-input-section"
        className="signup-password signup-input"
        placeholder="Password"
        type="password"
        name="password"
        id="password"
      />
      <InputField
        divClassName="signup-confirm-password-section signup-input-section"
        className="signup-confirm-password signup-input"
        placeholder="Confirm password"
        type="password"
        name="confirm-password"
        id="confirm-password"
      />
      <SignupButton
        divClassName="signup-btn-section"
        className="signup-btn"
        type="submit"
        value="Sign Up"
      />
    </div>
  );
};

const Form = ({ divClassName, method, action }) => {
  return (
    <form className={divClassName} method={method} action={action}>
      <FormContents divClassName="signup-sub-parent-layout" />
      <LoginLink
        divClassName="signup-login-link-section"
        className="signup-login-link"
        toLink="/login"
        value="Already registered?"
        text="Login"
      />
    </form>
  );
};

const SignupForm = () => {
  return (
    <div className="signup-img-bg">
      <div className="signup-form-bg-tint">
        <Form
          divClassName="signup-parent-layout"
          method="get"
          action="/signup"
        />
      </div>
    </div>
  );
};

const Signup = () => {
  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default Signup;
