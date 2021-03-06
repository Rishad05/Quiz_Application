import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import TextInput from "./TextInput";

const SignupForm = () => {
  return (
    <Form style={{ height: "500px" }}>
      <TextInput type="text" placeholder="Enter name" icon="person" />
      <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
      <TextInput type="password" placeholder="Enter password" icon="lock" />
      <TextInput
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
      />
      <CheckBox text="I agree to the Terms &amp; Conditions" />
      <Button>
        <span>Submit Now</span>
      </Button>
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupForm;
