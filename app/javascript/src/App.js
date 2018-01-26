import React from "react";
import { Graph } from "./Graph";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function App() {
  return (
    <div className="Wrapper">
      < Header />
      <div className="graph-wrapper">
        <Graph />
      </div>
      < Footer />
    </div>
  );
}
