import React from "react";
import { Button } from "../Button.jsx";
import Lookup from "../Lookup.jsx";
import "./Main.css";
import { get } from "axios";

const fetch = require("node-fetch");

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      value: props.value || "",
      error: props.error || "",
      label: props.label || "City",
      selectedOption: "",
      city: "",
      results: "",
    };

    this.onLocationChange = this.onLocationChange.bind(this);
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  changeValue(event) {
    const value = event.target.value;
    this.setState({ value, error: "" });
    this.setState = this.setState.bind(this);
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      this.setState({ value: this.props.predicted });
      this.setState = this.setState.bind(this);
    }
  }

  changeCity(event) {
    this.setState({ city: event.target.value });
    this.setState = this.setState.bind(this);
  }

  onLocationChange(city, selectedOption) {
    get(
      `https://app.zenserp.com/api/v2/search?q=Local%20News%20Station&location=${city},${selectedOption.value},United%20States&search_engine=google.com&gl=US&hl=en&device=desktop&apikey=00a450e0-e7ce-11ea-8899-959d4b64d1c1`
    )
      .then((json) => {
        let results = json.data.organic;

        this.setState({ city, selectedOption, results });
        console.log(results);
        this.props.history.push({
          //takes to stations page
          pathname: "/stations",

          state: { results },
        });
      })
      .catch((error) => {
        alert(
          error.message +
            "\r\n\r\nError codes: \r\n- 500: Location is non-existent \r\n- 403: No more API requests"
        );
      });
  }

  Search(city, state) {
    var url = "https://app.zenserp.com/api/v2/search";
    var params = `?q=Local News Station&location=${city},${state},United States&search_engine=google.com&gl=US&hl=en&device=desktop&apikey=fb0354a0-df83-11ea-97f1-5d196c8d0877`;
    fetch(url + params)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="Main">
        <Button
          onClick={() => {
            console.log();
          }}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--large"
        >
          Locality
        </Button>
        <Lookup onSubmit={this.onLocationChange} />
        <div className="container"></div>
      </div>
    );
  }
}

export default Main;
