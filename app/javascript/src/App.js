import React, { Component } from 'react'
import { render } from 'react-dom'
import { Graph } from "./Graph"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Canvas } from "./Canvas"
import { Button } from "./Button"

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <div className="graph-wrapper">
        <Canvas name="test" />
        <Graph />
      </div>
      <Footer />
      <div>
        <Button label='Create Arc' />
      </div>
      <div>
        <button>Remove Part</button>
      </div>
    </div>
  )
}

export App