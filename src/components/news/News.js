import React, { Component } from "react";
import { connect } from "react-redux";

import "./News.css";
import { getNews } from "../../actions/newsActions";

class NewsSources extends Component {
  state = {
    // newsSource: []
  };
  componentDidMount() {
    this.props.getNews(this.props.news.newsSource);
  }

  render() {
    return (
      <div className="newslist-wrapper">
        {this.props.news.news &&
          this.props.news.news.map(news => (
            <div className="card">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <div>
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="https://google.com" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
                <div>
                  <img
                    src="https://www.aljazeera.com/mritems/Images/2019/3/5/5485ae2b43484c08aad4df2c8d003aa2_18.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { getNews }
)(NewsSources);
