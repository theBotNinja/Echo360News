import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description,imageUrl,classstyle} = this.props;
    return (
      <div>
        <div className={classstyle} data-bs-interval="500" style={{width : "100%", height:"45vh"}}>
      <img src={imageUrl} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{title}</h5>
        <p>{description}</p>
        <a href="/somethinghere" className="btn btn-sm btn-info">Read More</a>
      </div>
      </div>
      </div>
    )
  }
}
