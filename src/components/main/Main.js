import React from "react";

import Section1 from "./Section1";
import Section2 from "./Section2";

import './Main.css';

export default function Main() {
  return (
    <div className="main">
      <Section1 />
      <Section2 />
    </div>
  );
}
