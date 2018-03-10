import React, { Component } from 'react'
import { render } from 'react-dom'
import { Graph } from "./Graph"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Canvas } from "./Canvas"
import { Button } from "./Button"

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
        <Canvas name="test" arcNumber={this.state.arcNumber} />
        <Graph />
        <Footer />
        <div>
          <Button label='Create Arc' onClick={() => this.setState({arcNumber: arcNumber + 1}) } />
          <Button label='Destroy Arc' onClick={() => console.log("this.arcNumber")} />
        </div>
      </div>
    )
  }
}

