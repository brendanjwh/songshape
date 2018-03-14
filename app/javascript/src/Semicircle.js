import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Arc } from 'react-konva'
import Konva from 'konva'

export class Semicircle extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.hoverArc = this.props.hoverArc.bind(this);
  }
  state = {
    color: 'green'
  }

  handleClick = () => {
    this.props.click(this.props.id)
    console.log("Menu!");
    console.log("Id: " + id);
  }

  // hoverArc = (e) => {
  //   this.props.hover
  // }

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

        onClick={this.handleClick}
        // onHover={this.hoverArc.bind(this)}
      />
    );
  }
}