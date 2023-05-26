/**
 * Call To Action: -
 */

import React from "react";

const CallToAction = () => {
  return (
    <React.Fragment>
      <div
        className="container-fluid fixed-top call-to-action"
        style={{
          height: 22,
        }}
      >
        <div className="container text-center ">
          <p
            style={{
              fontWeight: 500,
              color: "whitesmoke",
            }}
          >
            I kindly request your valuable support. Every contribution is
            greatly appreciated.
            <a
              href="https://www.buymeacoffee.com/codewithisaac"
              className="text-white "
              target="_blank"
            >
              Buy me a Coffee
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CallToAction;
