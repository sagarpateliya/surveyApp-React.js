import React from "react";
import logo from "./logo.svg";
import "./surveyOptions.css";
import SurveyCircle from "./surveyCircle";

class SurveyOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ""
    };
  }

  indedxToGet(selectedIndex) {
    console.log("index to get is running");

    this.setState({ selected: selectedIndex });
  }

  render() {
    console.log(this.props);

    return (
      <div className="surveyOptions">
        {this.props.opt.map((optionObj, index) => (
          <SurveyCircle
            options={optionObj}
            indexToSend={index}
            pass={this.indedxToGet.bind(this)}
            selectedCircle={this.state.selected}
          />
        ))}
      </div>
    );
  }
}
export default SurveyOptions;
