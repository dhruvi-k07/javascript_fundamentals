import React, { Component } from "react";

const Hoc = (Component, data) => {
    return class extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
              count: data,
            };
          }
        
          handleChange  = () => {
            this.setState({
                count: this.state.count + 1
            })
          }
        render(){
            return(
                <Component CountNumber = {this.state.count} handleChange={this.handleChange}/>
            )
        }
    }
}

export default Hoc;