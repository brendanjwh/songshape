import React, { Component } from 'react'

var buttonStyle = {
  margin: '10px 10px 10px 0',
  border: '1px solid cornflowerblue',
  padding: '10px 20px',
  fontSize: '15px',
  backgroundColor: 'cornsilk',
  boxShadow: '2px 2px 2px 0px',
  borderRadius: '5px'
};

export class Button extends Component {
  handleClick = () => {
    this.props.onClick()
  }
  render() {
    return (
      <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.handleClick}>{this.props.label}</button>
    );
  }
}