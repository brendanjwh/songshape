import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Semicircle extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var semicircle = this.refs.semicircle;
    var ctx = semicircle.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 1*Math.PI, 0);
    ctx.stroke();
  }

  render() {
    return (
      <canvas ref="semicircle" width="300" height="150"></canvas>
      )
  }
}

export Semicircle 