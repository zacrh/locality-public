import React from "react";
import "./Squares.css";

/* search button */

const STYLES = [
  "btn2--primary--solid",
  "btn2--warning--solid",
  "btn2--danger--solid",
  "btn2--success--solid",
  "btn2--primary--outline",
  "btn2--warning--outline",
  "btn2--danger--outline",
  "btn2--success--outline",
];

const SIZES = [
  "btn2--first",
  "btn2--second",
  "btn2--third",
  "btn2--fourth",
  "btn2--fifth",
  "btn2--sixth",
];

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
        className={`btn2 ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
      <div className="shadow"></div>
    </div>
  );
};

function Squares({ results }) {
  let num = 0;
  return (
    <div className="grid">
      <a
        href={
          typeof results[0].destination === "undefined"
            ? ((num = num + 1), results[0 + num].url)
            : results[0 + num].url
        }
        target="_blank"
      >
        <Button
          onClick={() => {
            console.log("You Clicked on Me!");
          }}
          type="button"
          buttonStyle="btn2--primary--solid"
          buttonSize="btn2--first"
        >
          <h3 style={{ textTransform: "uppercase" }}>
            {results[0 + num].destination
              .replace("www.", "")
              .replace("www1.", "")
              .replace("www2.", "")
              .replace("www3.", "")
              .replace("www4.", "")
              .split(".com")[0]
              .split(".org")[0]
              .split(".net")[0]
              .split(".edu")[0]
              .split(".info")[0]
              .split(".gov")[0]
              .replace(".", " ")
              .replace("the", "THE ")
              .replace("cbs", "CBS ")
              .replace("abc", "ABC ")
              .replace("nbc", "NBC ")
              .replace("live", " LIVE")
              .replace("news", " NEWS")}
          </h3>
        </Button>
      </a>
      <a
        href={
          typeof results[1].destination === "undefined"
            ? ((num = num + 1), results[1 + num].url)
            : results[1 + num].url
        }
        target="_blank"
      >
        <Button
          onClick={() => {
            console.log("You Clicked on Me!");
          }}
          type="button"
          buttonStyle="btn2--primary--solid"
          buttonSize="btn2--second"
        >
          <h3 style={{ textTransform: "uppercase" }}>
            {results[1 + num].destination
              .replace("www.", "")
              .replace("www1.", "")
              .replace("www2.", "")
              .replace("www3.", "")
              .replace("www4.", "")
              .split(".com")[0]
              .split(".org")[0]
              .split(".net")[0]
              .split(".edu")[0]
              .split(".info")[0]
              .split(".gov")[0]
              .replace(".", " ")
              .replace("the", "THE ")
              .replace("cbs", "CBS ")
              .replace("abc", "ABC ")
              .replace("nbc", "NBC ")
              .replace("live", " LIVE")
              .replace("news", " NEWS")}
          </h3>
        </Button>
      </a>
      <a
        href={
          typeof results[2].destination === "undefined"
            ? ((num = num + 1), results[2 + num].url)
            : results[2 + num].url
        }
        target="_blank"
      >
        <Button
          onClick={() => {
            console.log("You Clicked on Me!");
          }}
          type="button"
          buttonStyle="btn2--primary--solid"
          buttonSize="btn2--third"
        >
          <h3 style={{ textTransform: "uppercase" }}>
            {results[2 + num].destination
              .replace("www.", "")
              .replace("www1.", "")
              .replace("www2.", "")
              .replace("www3.", "")
              .replace("www4.", "")
              .split(".com")[0]
              .split(".org")[0]
              .split(".net")[0]
              .split(".edu")[0]
              .split(".info")[0]
              .split(".gov")[0]
              .replace(".", " ")
              .replace("the", "THE ")
              .replace("cbs", "CBS ")
              .replace("abc", "ABC ")
              .replace("nbc", "NBC ")
              .replace("live", " LIVE")
              .replace("news", " NEWS")}
          </h3>
        </Button>
      </a>
      <a
        href={
          typeof results[3].destination === "undefined"
            ? ((num = num + 1), results[3 + num].url)
            : results[3 + num].url
        }
        target="_blank"
      >
        <Button
          onClick={() => {
            console.log("You Clicked on Me!");
          }}
          type="button"
          buttonStyle="btn2--primary--solid"
          buttonSize="btn2--fourth"
        >
          <h3 style={{ textTransform: "uppercase" }}>
            {results[3 + num].destination
              .replace("www.", "")
              .replace("www1.", "")
              .replace("www2.", "")
              .replace("www3.", "")
              .replace("www4.", "")
              .split(".com")[0]
              .split(".org")[0]
              .split(".net")[0]
              .split(".edu")[0]
              .split(".info")[0]
              .split(".gov")[0]
              .replace(".", " ")
              .replace("the", "THE ")
              .replace("cbs", "CBS ")
              .replace("abc", "ABC ")
              .replace("nbc", "NBC ")
              .replace("live", " LIVE")
              .replace("news", " NEWS")}
          </h3>
        </Button>
      </a>
      <a
        href={
          typeof results[4].destination === "undefined"
            ? ((num = num + 1), results[4 + num].url)
            : results[4 + num].url
        }
        target="_blank"
      >
        <Button
          onClick={() => {
            console.log("You Clicked on Me!");
          }}
          type="button"
          buttonStyle="btn2--primary--solid"
          buttonSize="btn2--fifth"
        >
          <h3 style={{ textTransform: "uppercase" }}>
            {results[4 + num].destination
              .replace("www.", "")
              .replace("www1.", "")
              .replace("www2.", "")
              .replace("www3.", "")
              .replace("www4.", "")
              .split(".com")[0]
              .split(".org")[0]
              .split(".net")[0]
              .split(".edu")[0]
              .split(".info")[0]
              .split(".gov")[0]
              .replace(".", " ")
              .replace("the", "THE ")
              .replace("cbs", "CBS ")
              .replace("abc", "ABC ")
              .replace("nbc", "NBC ")
              .replace("live", " LIVE")
              .replace("news", " NEWS")}
          </h3>
        </Button>
      </a>
      <a
        href={
          typeof results[5].destination === "undefined"
            ? ((num = num + 1), results[5 + num].url)
            : results[5 + num].url
        }
        target="_blank"
      >
        <Button
          onClick={() => {
            console.log("You Clicked on Me!");
          }}
          type="button"
          buttonStyle="btn2--primary--solid"
          buttonSize="btn2--sixth"
        >
          <h3 style={{ textTransform: "uppercase" }}>
            {results[5 + num].destination
              .replace("www.", "")
              .replace("www1.", "")
              .replace("www2.", "")
              .replace("www3.", "")
              .replace("www4.", "")
              .split(".com")[0]
              .split(".org")[0]
              .split(".net")[0]
              .split(".edu")[0]
              .split(".info")[0]
              .split(".gov")[0]
              .replace(".", " ")
              .replace("the", "THE ")
              .replace("cbs", "CBS ")
              .replace("abc", "ABC ")
              .replace("nbc", "NBC ")
              .replace("live", " LIVE")
              .replace("news", " NEWS")}
          </h3>
        </Button>
      </a>
    </div>
  );
}

export default Squares;
