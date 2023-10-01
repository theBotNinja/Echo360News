import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { imageUrl } = this.props;
    return (
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: "gray",
          height: "50vh",
          borderRadius: "16px",
          width: "100%",
          filter: "brightness(50%)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>{imageUrl ? "" : "Image not found"}</p>
      </div>
    );
  }
}
