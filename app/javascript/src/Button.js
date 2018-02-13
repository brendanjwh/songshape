import React, { Component } from 'react'

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

const Button = (props) {
  return (
    <button
      className="btn btn-default"
      style={buttonStyle}>{this.props.label}</button>
  )
}