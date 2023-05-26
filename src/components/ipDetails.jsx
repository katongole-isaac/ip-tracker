/**
 * Ip Details Component
 *
 */

import React from "react";

import CardColumns from "./cardColumns";
import SearchInfo from "./searchInfo";
import NoResults from "./noResults";

const IpDetails = ({ data, search }) => {


  return (
    <React.Fragment>
      <div className="container-fluid ip-details  ">
        <div className="container ip-card-wrapper ">
          <div className="card shadow p-3 bg-white rounded">

            <SearchInfo searchTerm ip={data.query} search={search} />

            <div className="card-body p-0">
              <div className="container-fluid">
                <div className="row">
                  {data.status !== "fail" ? (
                    <CardColumns data={data} />
                  ) : (
                    <NoResults search={search} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IpDetails;


