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
    // var arcArray = this.state.arcNumber.concat(this.state.arcNumber.length);
    console.log("arcArray: " + this.state.arcNumber.concat(this.state.arcNumber.length));
    this.setState((prevState) => {
      return { arcNumber: this.state.arcNumber.concat(this.state.arcNumber.length) }
      console.log("new state: " + this.state.arcNumber.concat(this.state.arcNumber.length));
    });
  }
  removeArc = () => {
    // var arcArray = this.state.arcNumber.concat(this.state.arcNumber.length);
    this.setState((prevState) => {
      console.log("prevState length: " + this.state.arcNumber.length);
      if (this.state.arcNumber.length > 1) {
        console.log("new state: " + this.state.arcNumber);
        this.state.arcNumber.pop();
        return { arcNumber: this.state.arcNumber }
      }
      console.log("new state: " + this.state.arcNumber);
      return { arcNumber: [0] };
    });
  }
  render() {
    console.log("state at rendering: " + this.state.arcNumber);

    return (
      <div>
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