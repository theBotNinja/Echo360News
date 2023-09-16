import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description,imageUrl} = this.props;
    return (
      <div>
          <div className="card " style={{width: "25vw"}}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="dj">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/somethinghere" className="btn btn-sm btn-info">Read More</a>
            </div>
        </div> 
      </div>
    )
  }
}
