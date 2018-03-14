import React, { Component } from 'react'
import { render } from 'react-dom'
import { Semicircle } from './Semicircle'
import { Button } from './Button'
import { ColorPicker } from './ColorPicker'
import { Stage, Layer } from 'react-konva'
import Konva from 'konva';
import { SketchPicker } from 'react-color'

export class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.addArc = this.addArc.bind(this);
    this.removeArc = this.removeArc.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.state = {
      arcNumber: [],
      arcColor: ''
    }
  }
  addArc = () => {
    this.setState((prevState) => {
      console.log("color: " + this.state.arcColor);
      return { 
        arcNumber: this.state.arcNumber.concat(this.state.arcNumber.length),  
        arcColor: this.state.arcColor
      }
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
  handleChangeComplete = (color) => {
    console.log("color change: " + color.hex);
    this.setState({ arcColor: color.hex })
  }

  render() {
    var arcs = this.state.arcNumber;

    return (
      <div>
        <Stage width={window.innerWidth} height={(window.innerHeight)/2}>
          <Layer>
            {arcs.map((arc, i) => (
              <Semicircle arc={arc} key={i.toString()} value={arc} />
            ))}
          </Layer>
        </Stage>
        <div>
          <Button label='Create Arc' onClick={this.addArc} />
          <Button label='Destroy Arc' onClick={this.removeArc} />
          <ColorPicker color={ this.state.background } onChangeComplete={ this.handleChangeComplete } />
        </div>
      </div>
    )
  }
}