import React from "react";
import logo from "./logo.svg";
import "./surveyCircle.css";

class SurveyCircle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 0
    };
  }

  getIndex() {
    console.log("function is running");
    console.log(this.props.indexToSend);
    this.props.pass(this.props.indexToSend);
  }

  render() {
    return (
      <div
        className="surveyCircle"
        onClick={this.getIndex.bind(this)}
        style={{
          backgroundColor:
            this.props.selectedCircle === this.props.indexToSend &&
            this.props.options.color
        }}
      >
        <p>{this.props.options.choice}</p>
      </div>
    );
  }
}
export default SurveyCircle;
