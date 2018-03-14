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
      arcNumber: [0]
    }
  }
  addArc = () => {
    this.setState((prevState) => {
      return { arcNumber: this.state.arcNumber.concat(this.state.arcNumber.length) }
    });
  }
  removeArc = () => {
    this.setState((prevState) => {
      if (this.state.arcNumber.length > 1) {
        this.state.arcNumber.pop();
        return { arcNumber: this.state.arcNumber }
      }
      return { arcNumber: [0] };
    });
  }
  render() {
    var arcs = this.state.arcNumber;

    return (
      <div>
        <Stage width={window.innerWidth} height={(window.innerHeight)/2}>
          <Layer>
            {arcs.map((arc) => (
              <Semicircle arc={arc} />
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