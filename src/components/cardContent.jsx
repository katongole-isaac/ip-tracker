/**
 * Card Content Component
 *
 */

import React from "react";

const CardContent = ({ content }) => {
  if (!content )
    return <div className="spinner-border spinner-border-sm "></div>;

  if (typeof content !== "object")
    return <p className="ip-content">{content} </p>;

  return (
    <p className="ip-content">
      {`${content.city || "-" },${content.regionName || "-"} - ${content.countryCode || "-" }`}
    </p>
  );
};

export default CardContent;


