/**
 * Search Info Component - Display the current Ip or search term
 *
 */

import React from "react";
import _ from 'lodash';

import stringUtil from "../utils/string-util";

const SearchInfo = ({ ip,  search }) => {
  return (
    <div className="alert alert-warning py-0 text-center d-flex justify-content-center ">
      {!search ? (
        <Content label="Current Ip Adress" ip={ip} />
      ) : (
        <Content label={search} ip={ip} />
      )}
    </div>
  );
};

export default SearchInfo;

const Content = ({ label, ip }) => {
  return (
    <React.Fragment>
      <span> { stringUtil.startCase(label) }: &nbsp; </span>
      <strong> {ip} </strong>
    </React.Fragment>
  );
};

