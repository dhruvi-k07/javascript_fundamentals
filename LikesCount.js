import React, { Component } from "react";
import Hoc from "./Hoc";

class LikesCount extends Component {
  render() {
    return <div>
        {this.props.CountNumber} <br />
        <button onClick = {this.props.handleChange}>Like</button>
    </div>;
  }
}

const EnhancedLikes = Hoc(LikesCount, 5)

export default EnhancedLikes;