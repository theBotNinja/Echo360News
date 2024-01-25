import React, { Component } from "react";

export default class CardNewsItem extends Component {
  render() {
    let { imageUrl, content, linkToNews, desc, style } = this.props;
    return (
      <div>
        <a
          href={linkToNews}
          style={{ color: "black", "text-decoration": "none" }}
        >
          <div className="card shadow-sm" style={style}>
            <img src={imageUrl} className="card-img-top h-50" alt="..." />
            <div className="card-body">
              <h5
                className="text-md-center card-title"
                style={{ fontSize: "1.2vw" }}
              >
                {desc}
              </h5>
              <p
                className="text-sm-center card-text"
                style={{ fontSize: "0.89vw" }}
              >
                {content.slice(0, 50)}...
              </p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
