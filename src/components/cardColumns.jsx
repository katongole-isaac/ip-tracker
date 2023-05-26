/**
 * Card Column Component - Wrapper around card column
 *
 */
import React from "react";

import CardColumn from "./cardColumn";

const CardColumns = ({ data }) => {

  const { query: ip, timezone, isp, city, regionName, countryCode } = data;

  const location = {
    countryCode,
    regionName,
    city,
  };

  return (
    <React.Fragment>
      <CardColumn title="ip address" content={ip} />
      <CardColumn title="location" content={location} />
      <CardColumn title="timezone" content={timezone} />
      <CardColumn title="isp" content={isp} classes="" />
    </React.Fragment>
  );
};

export default CardColumns;
