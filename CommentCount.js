import React, { Component } from "react";
import Hoc from "./Hoc";

class CommentCount extends Component {
  render() {
    return <div>
        {this.props.CountNumber} <br />
        <button onClick = {this.props.handleChange}>Comment</button>
    </div>;
  }
}

const EnhancedComments = Hoc(CommentCount, 10)

export default EnhancedComments;
