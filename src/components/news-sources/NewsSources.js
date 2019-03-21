import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";

import "./NewsSources.css";
import { setNewsSource } from "../../actions/newsActions";

const colourOptions = [
  { value: "abc-news", label: "ABC News" },
  {
    value: "abc-news-au",
    label: "ABC News AU"
  },
  { value: "ansa", label: "ANSA.it" },
  { value: "ary-news", label: "ARY News" }
];

class NewsSources extends Component {
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
)(NewsSources);
