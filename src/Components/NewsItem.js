import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, name} = this.props
    return (
      <div>
        <div className="card my-5">
            <img className="card-img-top" src={imageUrl} alt="Card cap"/>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{marginLeft: '90%', zIndex: '1'}}>
              {name}
            </span>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}  </small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}
