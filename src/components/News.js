import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
    {
        "source": {
            "id": null,
            "name": "4029tv"
        },
        "author": "Adam Roberts, DMM",
        "title": "Arkansan dies from brain-eating amoeba; likely exposed at splash pad - 4029tv",
        "description": "Investigators believe the victim was likely exposed to the amoeba at the splash pad at the Country Club of Little Rock.",
        "url": "https://www.4029tv.com/article/arkansas-splash-pad-amoeba-death/45144142",
        "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/brain-amoeba-0124-1660774655.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        "publishedAt": "2023-09-15T13:38:00Z",
        "content": "LITTLE ROCK, Ark. —An Arkansan has died from an infection of Naegleria fowleri, which is commonly known as the \"brain-eating amoeba,\" according to a news release sent by the Arkansas Department of He… [+1017 chars]"
    },
    {
        "source": {
            "id": "abc-news",
            "name": "ABC News"
        },
        "author": "The Associated Press",
        "title": "Striking Hollywood writers, studios to resume negotiations next week - ABC News",
        "description": "Contract talks that could end Hollywood’s writers strike are set to resume next week",
        "url": "https://abcnews.go.com/Business/wireStory/striking-hollywood-writers-studios-resume-negotiations-week-103207055",
        "urlToImage": "https://i.abcnewsfe.com/a/fed470e7-e632-4ea1-828c-dcea444809ef/wirestory_5f2a33da0c076019ce7dc2e0937866b4_12x5.jpg?w=992",
        "publishedAt": "2023-09-15T12:47:20Z",
        "content": "LOS ANGELES -- Contract talks that could end Hollywood's writers strike are set to resume next week, studios said Thursday.\r\nThe Alliance of Motion Picture and Television Producers, which represents … [+1587 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Yahoo Sports",
        "title": "Eagles improve to 2-0 with win over Vikings, behind NFL's best offensive line - Yahoo Sports",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiRGh0dHBzOi8vc3BvcnRzLnlhaG9vLmNvbS9lYWdsZXMtYmVhdC12aWtpbmdzLW5mbC0yMDIzLTEyNDIzNDgxOC5odG1s0gFMaHR0cHM6Ly9zcG9ydHMueWFob28uY29tL2FtcGh0bWwvZWFnbGVzLWJlYXQtdmlraW5ncy1uZmwtMjAyMy0xMjQyMzQ4MTguaHRtbA?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-09-15T12:42:34Z",
        "content": null
    },
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": "David Oliver",
        "title": "Katharine McPhee, David Foster talk death of their nanny - USA TODAY",
        "description": "Katharine McPhee and David Foster are speaking up after the death of their nanny Yadira Calito.",
        "url": "https://www.usatoday.com/story/entertainment/celebrities/2023/09/15/katharine-mcphee-david-foster-nanny-death/70861552007/",
        "urlToImage": "https://www.usatoday.com/gcdn/presto/2021/03/03/USAT/1ae05f1c-c1e3-4610-a254-8d4d1374fd06-GTY_1185353522.jpg?crop=6287,3537,x0,y487&width=3200&height=1801&format=pjpg&auto=webp",
        "publishedAt": "2023-09-15T12:34:05Z",
        "content": "Katharine McPhee and David Foster are speaking up after the death of their nanny Yadira Calito.\r\n\"It's been tough for her,\" Foster told ET in a joint interview with McPhee. \"Yeah, it's been tough. Sh… [+1756 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": "Reuters",
        "title": "Chinese defence minister under investigation for corrupt procurement - Reuters",
        "description": "Defence Minister Li Shangfu, who has been missing from public view for more than two weeks, has been placed under investigation by Chinese authorities, according to 10 people familiar with the matter.",
        "url": "https://www.reuters.com/world/china/us-diplomat-questions-whether-chinese-defence-minister-under-house-arrest-2023-09-15/",
        "urlToImage": "https://www.reuters.com/resizer/AeKXhqJ9tX4YiZcJ0jVKRxX3-CY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/N4D2R2LSHNIDXCDUPDMYGNSD3M.jpg",
        "publishedAt": "2023-09-15T12:10:00Z",
        "content": "Sept 15 (Reuters) - Defence Minister Li Shangfu, who has been missing from public view for more than two weeks, has been placed under investigation by Chinese authorities, according to 10 people fami… [+5310 chars]"
    }
]

constructor (){
  super();
  this.state = {
    articles: this.articles,
    loading : false
  }
}
  render() {
    return (
      <div className='container my-3'>
        <h2>Echo360NEWS - Top HeadLines</h2>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" >
        <div className="carousel-indicators">
            {this.state.articles.map((element,index)=>{
                return <button key={element.url} type="button" data-bs-target="#demo" data-bs-slide-to={index} className="active"></button>
            })}
        </div>
        <div className="carousel-inner">
          {this.state.articles.map((element,index)=>{
            return <div  key = {element.url}>
            <NewsItem title = {element.title} classstyle={index?"carousel-item":"carousel-item active"} imageUrl={element.urlToImage} description = {element.description} />
          </div>
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
        </div>
      </div>
    )
  }
}

