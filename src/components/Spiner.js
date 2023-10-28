import React, { Component } from "react";

export default class Spiner extends Component {
  render() {
    return (
      <div
        style={{ zIndex: "10" }}
        className="position-relative w-100 h-100 top-0 start-0 d-flex justify-content-center align-items-center"
      >
        <div
          className="spinner-border text-dark"
          style={{ height: "20vw", width: "20vw" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <h1 className="position-absolute">Echo360NEWS</h1>
      </div>
    );
  }
}
