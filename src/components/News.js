import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Carousel from "react-bootstrap/Carousel";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=72e9941b0f9d414cad48c9c10da5400b";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    console.log(this.articles);
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Echo360NEWS - Top HeadLines</h2>
        <Carousel fade>
          {this.state.articles.map((element) => {
            return (
              <Carousel.Item key={element.url}>
                <NewsItem imageUrl={element["urlToImage"]} />
                <Carousel.Caption>
                  <h3>{element["title"]}</h3>
                  <p>{element["description"]}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
