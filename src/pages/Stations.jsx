import React from "react";
import { Button } from "../Button.jsx";
import Squares from "../Squares.jsx";
import history from "../history";
import "./Main.css";

class Stations extends React.Component {
  render() {
    return (
      <div className="Stations">
        <Button
          className="header"
          onClick={() => {
            //console.log(this.props.location.state.results);
            history.push("/");
          }}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--large"
        >
          Locality
        </Button>
        <Squares results={this.props.location.state.results} />
        <div className="container"></div>
      </div>
    );
  }
}

export default Stations;
