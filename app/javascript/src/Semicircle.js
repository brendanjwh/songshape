import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Arc } from 'react-konva'
import Konva from 'konva'

export class Semicircle extends Component {
  state = {
    color: 'green'
  }

  render() {
    return (
      <Arc
        x={200}
        y={200}
        innerRadius={80}
        outerRadius={100}
        angle={-180}
        fill={this.state.color}
        clockwise={true}
        draggable={true}
        scaleX={1.5}
        scaleY={1.5}
      />
    );
  }
}