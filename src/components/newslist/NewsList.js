import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";

import "./NewsList.css";
import { setNewsSource } from "../../actions/newsActions";

const colourOptions = [
  { value: "abc-news", label: "ABC News", color: "#00B8D9", isFixed: true },
  { value: "abc-news-au", label: "ABC News AU", color: "#0052CC", disabled: true },
  { value: "ansa", label: "ANSA.it", color: "#5243AA" },
  { value: "ary-news", label: "ARY News", color: "#5243AA" }
];

class NewsList extends Component {
  state = {
    newsSource: []
  };

  onClick = () => {
    console.log(this.state);
    this.props.setNewsSource(this.state.newsSource);
  };
  onChange = selectedOptions => {
    console.log(selectedOptions);
    if (selectedOptions) {
      this.setState({ newsSource: selectedOptions });
    }
  };

  render() {
    return (
      <div>
        <Select
          defaultValue={[]}
          onChange={this.onChange}
          isMulti
          name="newsSource"
          options={colourOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <button onClick={this.onClick}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { setNewsSource }
)(NewsList);
