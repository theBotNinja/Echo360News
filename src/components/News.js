import React, { Component } from "react";
import NewsItem from "./NewsItem";
import CardNewsItem from "./CardNewsItem";
import Carousel from "react-bootstrap/Carousel";
import Spiner from "./Spiner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      everythingArticles: [],
      loading: false,
      loading1: false,
      page: 1,
    };
  }
  backToTop = () => {
    document.getElementById("gridViewShow").scrollIntoView();
  };
  async componentDidMount() {
    let url1 =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=718d4e48f00a4620bfaf791726cd7c33&category=general&pageSize=7";
    this.setState({ loading1: true });
    let data = await fetch(url1);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading1: false });
    this.secondloading(1);
  }
  async secondloading(page) {
    let url2 = `https://newsapi.org/v2/everything?q=everything&apiKey=718d4e48f00a4620bfaf791726cd7c33&pageSize=20&page=${page}`;
    this.setState({ loading: true });
    let data = await fetch(url2);
    let parsedData = await data.json();
    this.setState({ everythingArticles: parsedData.articles, loading: false });
  }
  handlePrevPage = async () => {
    let url2 = `https://newsapi.org/v2/everything?q=everything&apiKey=718d4e48f00a4620bfaf791726cd7c33&pageSize=20&page=${
      this.state.page - 1
    }`;
    this.setState({ loading: true });
    let data = await fetch(url2);
    let parsedData = await data.json();
    this.setState({ everythingArticles: parsedData.articles, loading: false });
    this.setState({ page: this.state.page - 1 });
    setTimeout(this.backToTop, 500);
  };
  handleNextPage = async () => {
    let url2 = `https://newsapi.org/v2/everything?q=everything&apiKey=718d4e48f00a4620bfaf791726cd7c33&pageSize=20&page=${
      this.state.page + 1
    }`;
    this.setState({ loading: true });
    let data = await fetch(url2);
    let parsedData = await data.json();
    if (parsedData.status == "ok") {
      this.setState({
        everythingArticles: parsedData.articles,
        loading: false,
      });
      this.setState({ page: this.state.page + 1 });
    } else {
      alert("no more page !!");
      this.setState({ loading: false });
    }
    setTimeout(this.backToTop, 500);
  };

  render() {
    return (
      <div className="container my-3">
        <h2>Echo360NEWS - Top HeadLines</h2>
        <Carousel fade>
          {this.state.loading1 && <Spiner></Spiner>}
          {!this.state.loading1 &&
            this.state.articles.map((element) => {
              return (
                <Carousel.Item key={element.url}>
                  <NewsItem imageUrl={element["urlToImage"]} />
                  <Carousel.Caption>
                    <h3 style={{ fontSize: "1.5vw" }}>{element["title"]}</h3>
                    <p style={{ fontSize: "0.9vw" }}>
                      {element["description"]}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
        </Carousel>
        <div>
          <h3 id="gridViewShow" className="my-3">
            Top News in India
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1em",
            }}
          >
            {this.state.loading && <Spiner></Spiner>}
            {!this.state.loading &&
              this.state.everythingArticles.map((element) => {
                return (
                  <CardNewsItem
                    key={element["url"]}
                    content={element["content"]}
                    linkToNews={element["url"]}
                    imageUrl={element["urlToImage"]}
                    style={{ width: "20vw", height: "25vw" }}
                    desc={element["title"]}
                  ></CardNewsItem>
                );
              })}
            <div className="w-100 d-flex justify-content-around">
              <button
                type="button"
                disabled={this.state.page <= 1}
                className="btn btn-outline-dark"
                onClick={this.handlePrevPage}
              >
                Back
              </button>
              <p className="text-md-center fw-bold">{this.state.page}</p>
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={this.handleNextPage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
