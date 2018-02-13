import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Semicircle } from './Semicircle'

export class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = { arcNumber: 0 };

    // setArcs(() => {
    //   this.setState{ arcNumber}
    // })

    // addArc(() => {

    // })

    // removeArc(() => {

    // })
  }
  // to save canvas
  // const dataURL = canvas.toDataURL()

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image
    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      ctx.font = "30px Courier"
      ctx.fillText(this.props.name, 50, 75)
    }
  }

  render() {
    return(
      <div>
        <canvas ref="canvas" width={640} height={425} />
        <img ref="image"  display="none" className="hidden" />
        <Semicircle />
      </div>
    )
  }
}

