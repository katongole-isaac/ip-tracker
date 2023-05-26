/**
 * Form Component - 
 * Every child of Form should have a state with data and errors objects
 * 
 * i.e state = {
 *  data: {}, errors:{}
 * }
 * And a schema 
 *
 */

import React, { Component } from "react";

import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    const { errors } = this.validateOnChange(input);

    if (!errors) return;

    this.setState({ data, errors });
  };

  validateOnChange = (input) => {
    const options = { abortEarly: true };

    const { name, value } = input;
    const errors = {};

    try {
      this.schema.validateSyncAt(name, { [name]: value }, options);
    } catch (ex) {
      errors[ex.path] = ex.message;
    }

    return { errors };
  };

  validate = (data) => {
    const options = { abortEarly: false };
    const errors = {};

    let results;

    try {
      results = this.schema.validateSync(data, options);
    } catch (error) {
      for (let ex of error.inner) {
        errors[ex.path] = ex.message;
      }
    }

    return { errors, results };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { results: data, errors } = this.validate(this.state.data);

    if (Object.keys(errors).length !== 0) return this.setState({ errors });

    this.doSubmit(data);
    
  };

  renderInput(name) {
    const { data, errors } = this.state;
    return (
      <Input
        value={data[name]}
        onChange={this.handleChange}
        name={name}
        error={errors[name]}
      />
    );
  }

  renderButton(label) {
    return (
      <button
        className="btn btn-success my-2 my-sm-0"
        type="submit"
        onClick={(e) => this.handleSubmit(e)}
      >
        {label}
      </button>
    );
  }
}

export default Form;
