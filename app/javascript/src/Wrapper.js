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
      arcNumber: 0
    }
  }
  addArc = () => {
    this.setState((prevState) => {
      return { arcNumber: prevState.arcNumber + 1 }
    });
    console.log("Arc Number: " + this.state.arcNumber);
  }
  removeArc = () => {
    this.setState((prevState) => {
      if (prevState > 1) {
        return { arcNumber: prevState.arcNumber - 1 }
      }
      return { arcNumber: 0 };
    });
    console.log("Arc Number: " + this.state.arcNumber);
  }
  render() {
    const arcNumber = this.state.arcNumber;
    console.log("Arc Number: " + arcNumber);
    return (
      <div><h1>{this.arcNumber}</h1>
        <Stage width={window.innerWidth} height={(window.innerHeight)/2}>
          <Layer>
            <Semicircle />
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