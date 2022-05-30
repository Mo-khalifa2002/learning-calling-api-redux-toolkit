import React from "react";
// import Map from "./Map";

const BooksList = ({ isLoading, books }) => {
  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <div>
          <h2>Books List</h2>
          <ul className="list-group">
            {books &&
              books?.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex  justify-content-between align-items-center"
                >
                  <div>{item.title}</div>
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary">
                      Read
                    </button>
                    <button type="button" className="btn btn-danger mr-2">
                      Delete
                    </button>
                  </div>
                </li>
              ))}
          </ul>
          <ul className="list-group">
            <li className="list-group-item d-flex  justify-content-between align-items-center">
              <div>learn react</div>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary">
                  Read
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </li>
            <li className="list-group-item d-flex  justify-content-between align-items-center">
              <div>learn redux</div>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary">
                  Read
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </li>
            <li className="list-group-item d-flex  justify-content-between align-items-center">
              <div>learn Mui</div>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary">
                  Read
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default BooksList;
