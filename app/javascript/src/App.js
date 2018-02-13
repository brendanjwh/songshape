import React, { Component } from 'react'
import { render } from 'react-dom'
import { Graph } from "./Graph"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Canvas } from "./Canvas"
import { Button } from "./Button"

export function App() {
  return (
    <div className="Wrapper">
      <Header />
      <div className="graph-wrapper">
        <Canvas  
          name="test"
        />
        <Graph />
      </div>
      <Footer />
      <div>
        <button>Add Part</button>
      </div>
      <div>
        <button>Remove Part</button>
      </div>
    </div>
  )
}
