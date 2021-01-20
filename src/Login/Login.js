import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Heading = ({ text }) => {
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

const LoginButton = ({ divClassName, className, type, value }) => {
  return (
    <div className={divClassName}>
      <input className={className} type={type} value={value} />
    </div>
  );
};

const ForgotPasswordLink = ({ divClassName, className, toLink, text }) => {
  return (
    <div className={divClassName}>
      <Link className={className} to={toLink}>
        {text}
      </Link>
    </div>
  );
};

const SignupLink = ({ divClassName, className, toLink, value, text }) => {
  return (
    <div className={divClassName}>
      <p>
        {value}{" "}
        <Link className={className} to={toLink}>
          {text}
        </Link>
      </p>
    </div>
  );
};

const FormContents = ({ divClassName }) => {
  return (
    <div className={divClassName}>
      <Heading text="Login" />
      <InputField
        divClassName="email-section input-section"
        className="email inputs"
        placeholder="E-mail address"
        type="email"
        name="email"
        id="email"
      />
      <InputField
        divClassName="password-section input-section"
        className="password inputs"
        placeholder="Password"
        type="password"
        name="password"
        id="password"
      />
      <LoginButton
        divClassName="login-btn-section"
        className="login-btn"
        type="submit"
        value="Login"
      />
      <ForgotPasswordLink
        divClassName="forgot-pwd"
        className="forgot-pwd-link"
        toLink="/login"
        text="Forgot password?"
      />
    </div>
  );
};

const Form = ({ divClassName, method, action }) => {
  return (
    <form className={divClassName} method={method} action={action}>
      <FormContents divClassName="sub-parent-layout" />
      <SignupLink
        divClassName="signup-link-section"
        className="signup-link"
        toLink="/signup"
        value="Not registered?"
        text="Sign Up"
      />
    </form>
  );
};

const LoginForm = () => {
  return (
    <div className="img-bg">
      <div className="form-bg-tint">
        <Form divClassName="parent-layout" method="get" action="/login" />
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
