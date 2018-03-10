import React, { Component } from 'react'
import { render } from 'react-dom'
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Button } from "./Button"
import { Semicircle } from "./Semicircle"
import { Stage, Layer } from 'react-konva';
import Konva from 'konva';

export class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      arcNumber: 0
    };
  }

  componentDidMount() {
    console.log(this.state.arcNumber);
  }

  render() {
    return (
      <div className="Wrapper">
        <Header />
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Semicircle />
          </Layer>
        </Stage>
        <div>
          <Button label='Create Arc' onClick={() => this.setState({arcNumber: arcNumber + 1}) } />
          <Button label='Destroy Arc' onClick={() => console.log("this.arcNumber")} />
        </div>
        <Footer />
      </div>
    )
  }
}

