import React from "react";

export default function DarkMode({ setDarkModeBox }) {
  //Button Styling
  const noWrap = {
    whiteSpace: "nowrap",
  };
  return (
    <div style={{ backgroundColor: "#ededed" }} className="row py-2">
      <div className="col-7"></div>
      <div className="col-5">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="darkmode"
            onChange={setDarkModeBox}
          />
          <label 
          className="custom-control-label" 
          htmlFor="darkmode"
          style={noWrap}
          >
            Toggle Dark Mode
          </label>
        </div>
      </div>
    </div>
  );
}
