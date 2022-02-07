import React from "react";
import classes from "../Styles/Answers.module.css";
import CheckBox from "./CheckBox";

const Answers = () => {
  return (
    <div className={classes.answers}>
      <CheckBox className={classes.answer} text="A test question" />
    </div>
  );
};

export default Answers;
