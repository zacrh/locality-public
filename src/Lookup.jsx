import React, { useState } from "react";
import Select from "react-select";
import BeatLoader from "react-spinners/BeatLoader";
import "./Lookup.css";

/* dropdown menus */

const options = [
  { value: "Alabama", label: "Alabama" },
  { value: "Alaska", label: "Alaska" },
  { value: "Arizona", label: "Arizona" },
  { value: "Arkansas", label: "Arkansas" },
  { value: "California", label: "California" },
  { value: "Colorado", label: "Colorado" },
  { value: "Connecticut", label: "Connecticut" },
  { value: "Delaware", label: "Delaware" },
  { value: "Florida", label: "Florida" },
  { value: "Georgia", label: "Georgia" },
  { value: "Hawaii", label: "Hawaii" },
  { value: "Idaho", label: "Idaho" },
  { value: "Illinois", label: "Illinois" },
  { value: "Indiana", label: "Indiana" },
  { value: "Iowa", label: "Iowa" },
  { value: "Kansas", label: "Kansas" },
  { value: "Kentucky", label: "Kentucky" },
  { value: "Louisiana", label: "Louisiana" },
  { value: "Maine", label: "Maine" },
  { value: "Maryland", label: "Maryland" },
  { value: "Massachusetts", label: "Massachusetts" },
  { value: "Michigan", label: "Michigan" },
  { value: "Minnesota", label: "Minnesota" },
  { value: "Mississippi", label: "Mississippi" },
  { value: "Missouri", label: "Missouri" },
  { value: "Montana", label: "Montana" },
  { value: "Nebraska", label: "Nebraska" },
  { value: "Nevada", label: "Nevada" },
  { value: "New Hampshire", label: "New Hampshire" },
  { value: "New Jersey", label: "New Jersey" },
  { value: "New Mexico", label: "New Mexico" },
  { value: "New York", label: "New York" },
  { value: "North Carolina", label: "North Carolina" },
  { value: "North Dakota", label: "North Dakota" },
  { value: "Ohio", label: "Ohio" },
  { value: "Oklahoma", label: "Oklahoma" },
  { value: "Oregon", label: "Oregon" },
  { value: "Pennsylvania", label: "Pennsylvania" },
  { value: "Rhode IslandRI", label: "Rhode Island" },
  { value: "South Carolina", label: "South Carolina" },
  { value: "South Dakota", label: "South Dakota" },
  { value: "Tennessee", label: "Tennessee" },
  { value: "Texas", label: "Texas" },
  { value: "Utah", label: "Utah" },
  { value: "Vermont", label: "Vermont" },
  { value: "Virginia", label: "Virginia" },
  { value: "Washington", label: "Washington" },
  { value: "West Virginia", label: "West Virginia" },
  { value: "Wisconsin", label: "Wisconsin" },
  { value: "Wyoming", label: "Wyoming" },
];

const options1 = [{ value: "US", label: "United States" }];

const customStyles = {
  control: (base, state) => ({
    ...base,
    height: "56px", //2.35vw
    "min-height": "56px", //2.35vw
    background: "#b5bdc7",
    width: "32% !important",
    left: "15%",
    marginTop: "1%",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.33)",
    fontFamily: "Roboto",
  }),
  option: (provided) => ({
    ...provided,
    color: "black",
    background: "#b5bdc7",
    fontFamily: "Roboto",
  }),
  menu: (provided, state) => ({
    ...provided,
    width: "32% !important",
    left: "15%",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "#f0f2f4",
  }),
};

const customStyles1 = {
  control: (base, state) => ({
    ...base,
    height: "56px", //2.35vw
    "min-height": "56px", //2.35vw
    background: "#b5bdc7",
    width: "32% !important",
    left: "53%",
    transform: "translate(0%, -100%)",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.33)",
    fontFamily: "Roboto",
  }),
  option: (provided) => ({
    ...provided,
    color: "black",
    background: "#b5bdc7",
    fontFamily: "Roboto",
  }),
  menu: (provided, state) => ({
    ...provided,
    width: "32% !important",
    left: "53%",
    transform: "translate(0%, -130%)",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "#f0f2f4",
  }),
};

/* end of dropdown menus */
/* search button */

const STYLES = [
  "btn1--primary--solid",
  "btn1--warning--solid",
  "btn1--danger--solid",
  "btn1--success--solid",
  "btn1--primary--outline",
  "btn1--warning--outline",
  "btn1--danger--outline",
  "btn1--success--outline",
];

const SIZES = ["btn1--medium", "btn1--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        className={`btn1 ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
      <div className="shadow"></div>
    </div>
  );
};

/* end of search button */

class Lookup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      value: props.value || "",
      error: props.error || "",
      label: props.label || "City",
      selectedOption: "",
      city: "",
      searchText: "Search",
    };

    this.inputUpdated = this.inputUpdated.bind(this);
    this.submitLocation = this.submitLocation.bind(this);
  }

  changeText = (searchText) => {
    this.setState({ searchText });
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  changeValue(event) {
    const value = event.target.value;
    this.setState({ value, error: "" });
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      this.setState({ value: this.props.predicted });
    }
  }

  changeCity(event) {
    this.setState({ city: event.target.value });
  }

  submitLocation(e) {
    e.preventDefault();

    const { city, selectedOption } = this.state;
    const { onSubmit } = this.props;

    onSubmit(city, selectedOption);
  }

  inputUpdated(e) {
    const { value } = e.target;
    this.setState({ city: value });
  }

  render() {
    const { active, value, error, label } = this.state;
    const { predicted, locked } = this.props;
    const { selectedOption } = this.state;
    const { searchText } = this.state;
    const fieldClassName = `field ${
      (locked ? active : active || value) && "active"
    } ${locked && !active && "locked"}`;
    return (
      <div id="box">
        <h1>Where Are You?</h1>
        <form onSubmit={this.submitLocation}>
          <div className="field">
            {active && value && predicted && predicted.includes(value) && (
              <p className="predicted">{predicted}</p>
            )}
            <input
              id={1}
              type="input"
              name="city"
              value={this.state.city}
              placeholder={label}
              onChange={this.changeCity.bind(this)}
              onClick={() => {
                this.changeText("Search");
              }}
              onKeyPress={this.handleKeyPress.bind(this)}
              onInput={this.inputUpdated}
              onFocus={() => !locked && this.setState({ active: true })}
              onBlur={() => !locked && this.setState({ active: false })}
            />
            <label htmlFor={1} className={error && "error"}>
              {error || label}
            </label>
          </div>
          <Select
            name="selectedOption"
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            styles={customStyles}
            placeholder={<div>State</div>}
          />
          <Button
            value="Send"
            onClick={() => {
              console.log(selectedOption.value);
              this.changeText(<BeatLoader color={"#f0f2f4"} />);
            }}
            type="submit"
            buttonStyle="btn1--primary--solid"
            buttonSize="btn1--large"
          >
            {searchText}
          </Button>
        </form>
        <Select
          options={options1}
          styles={customStyles1}
          placeholder={<div>Country</div>}
        />
      </div>
    );
  }
}

export default Lookup;
