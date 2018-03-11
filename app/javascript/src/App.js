import React, { Component } from 'react'
import { render } from 'react-dom'
import { Header } from "./Header"
import { Wrapper } from "./Wrapper"

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Wrapper />
      </div>
    )
  }
}

