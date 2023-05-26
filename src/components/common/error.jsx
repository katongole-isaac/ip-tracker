/**
 * Error Component
 *
 */

import { isEmpty } from "../../utils/checkError";

const Error = ({ errors }) => {
  const handleClick = async () => {};

  if (!isEmpty(errors))
    return (
      <div className="container-fluid ip-details ">
        <div className="container">
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <div className="container-fluid">
                <div className="row ">
                  <div
                    className="alert  alert-danger text-center d-flex  justify-content-center
                  col-12 p-1
                  "
                  >
                    <p className="">Something went wrong</p>
                  </div>
                  <div className="col-12  text-center justify-content-center">
                    <button
                      className="btn btn-sm ml-2 btn-primary "
                      onClick={() =>  window.location.reload()}
                    >
                      Reload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Error;
