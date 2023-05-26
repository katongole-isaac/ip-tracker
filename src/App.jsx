/**
 * Primary file for the App
 *
 */

import React, { Component } from "react";

import Header from "./components/header";
import IpDetails from "./components/ipDetails";
import Error from "./components/common/error";
import DisplayMap from "./components/displayMap";
import CallToAction from "./components/callToAction";

import { isEmpty } from "./utils/checkError";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      errors: {},
      search: "",
    };

    this.setState = this.setState.bind(this);
  }

  render() {
    const { data, errors, search } = this.state;

    return (
      <div className="container-fluid p-0 vh-100">
        <CallToAction />
        <Header onReadyData={this.setState} />

        {isEmpty(errors) ? (
          <IpDetails data={data} search={search} />
        ) : (
          <Error errors={errors} />
        )}

        <DisplayMap {...data} />
      </div>
    );
  }
}

export default App;
