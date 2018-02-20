import React, { Component } from 'react'
import { Canvas } from './Canvas'

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

export class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="btn btn-default"
        style={buttonStyle}>{this.props.label}</button>
    );
  }
}