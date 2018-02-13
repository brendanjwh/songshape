import React from 'react'

class Stage extends Component {
  constructor(props) {
    width: this.props.width,
    height: this.props.height;
  }
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}></Stage>
    );
  }
}