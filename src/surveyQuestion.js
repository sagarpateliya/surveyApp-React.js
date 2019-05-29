import React from "react";
import "./surveyQuestion.css";
import SurveyOptions from "./surveyOptions";

class SurveyQuestions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.details.option);

    return (
      <div className="surveyQuestion">
        <p>{this.props.details.que}</p>

        <SurveyOptions opt={this.props.details.option} />
      </div>
    );
  }
}

export default SurveyQuestions;
