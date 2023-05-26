/**
 * Header Component - Comprising of title and input
 *
 */
import React from "react";
import * as yup from "yup";

import Form from "./common/form";
import { ipInfo } from "../services/ipService";

class Header extends Form {
  state = {
    data: {
      searchTerm: "",
    },
    errors: {},
  };

  schema = yup.object().shape({
    searchTerm: yup
      .string()
      .matches(
        /^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})|(\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b)$/,
        " Invalid domain.com or Ipv4 address"
      )

      .required()
      .label("Search-term"),
  });

  async componentDidMount() {
    const { data, errors } = await ipInfo();
    this.props.onReadyData({ data, errors });
  }

  doSubmit = async (inputData) => {
    const { searchTerm } = inputData;
    const { data, errors } = await ipInfo(searchTerm);

    this.props.onReadyData({ data, errors, search: searchTerm });
  };

  handleClick = async () => {
    
    const { data, errors } = await ipInfo();

    this.props.onReadyData({ data, errors, search: "" });
  };

  render() {
    return (
      <React.Fragment>
        <div className="app-header">
          <div className="header text-center text-white py-4">
            <h1>
              <button className="btn btn-success" onClick={this.handleClick}>
                {" "}
                IP
              </button> {" "}
              Adress Tracker
            </h1>
          </div>
          <div className="m-auto form-wrapper ">
            <form className="form-line d-flex align-items-center">
              {this.renderInput("searchTerm")}
              {this.renderButton("Search")}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
