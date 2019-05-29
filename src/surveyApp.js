import React from "react";
import logo from "./logo.svg";
import "./surveyApp.css";
import SurveyQuestions from "./surveyQuestion.js";

class SurveyApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: "Starbucks surway",

      questions: [
        {
          que: "Rate us",

          option: [
            { choice: "good", color: "green" },
            { choice: "bad", color: "red" },
            { choice: "average", color: "yellow" }
          ]
        },

        {
          que: "like us or not",
          option: [
            { choice: "good", color: "green" },
            { choice: "bad", color: "red" },
            { choice: "average", color: "yellow" }
          ]
        },

        {
          que: "give us rating out of 10",
          option: [
            { choice: "good", color: "green" },
            { choice: "bad", color: "red" },
            { choice: "average", color: "yellow" }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div className="surveyApp">
        <h1>
          <center>{this.state.heading}</center>
        </h1>

        {this.state.questions.map(obj => (
          <SurveyQuestions details={obj} />
        ))}
      </div>
    );
  }
}

export default SurveyApp;
