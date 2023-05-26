/**
 * Input Component
 *
 */

import React from "react";

const Input = ({ value, onChange, name, error }) => {
  return (
    <React.Fragment>
      <input
        className="form-control mr-sm-2 p-3"
        type="search"
        placeholder="Search for any Ip address or domain"
        aria-label="Search"
        autoComplete="off"
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
      />
      {error && (
        <div className="alert alert-danger p-1 mt-1 position-absolute error-display">
          {error}
        </div>
      )}
    </React.Fragment>
  );
};

export default Input;
