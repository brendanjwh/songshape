import React, { Component } from 'react'
import { render } from 'react-dom'
import { Semicircle } from "./Semicircle"
import { Button } from "./Button"
import { Stage, Layer } from 'react-konva'
import Konva from 'konva';

export class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.addArc = this.addArc.bind(this);
    this.removeArc = this.removeArc.bind(this);
    this.state = {
      arcNumber: []
    }
  }
  addArc = () => {
    this.setState((prevState) => {
      return { arcNumber: this.state.arcNumber.concat(this.state.arcNumber.length) }
    });
  }
  removeArc = () => {
    this.setState((prevState) => {
      if (this.state.arcNumber.length > 0) {
        this.state.arcNumber.pop();
        return { arcNumber: this.state.arcNumber }
      }
      return { arcNumber: [] };
    });
  }
  menuArc = () => {
    console.log("Menu!");
  }
  render() {
    var arcs = this.state.arcNumber;

    return (
      <div>
        <Stage width={window.innerWidth} height={(window.innerHeight)/2}>
          <Layer>
            {arcs.map((arc, i) => (
              <Semicircle arc={arc} key={i} onClick={ this.menuArc } />
            ))}
          </Layer>
        </Stage>
        <div>
          <Button label='Create Arc' onClick={this.addArc} />
          <Button label='Destroy Arc' onClick={this.removeArc} />
        </div>
      </div>
    )
  }
}