import React from "react";
import ReactCurvedText from "react-curved-text";
import "./App.css";
import { Header } from "./components/header/Header";
import { About } from "./components/about/About";
import { Services } from "./components/services/Services";
import { Approach } from "./components/approach/Approach";
import { Projects } from "./components/projects/Projects";
import { Footer } from "./components/footer/Footer";
import { Tools } from "./components/tools/Tools";
import styled, { keyframes } from "styled-components";

function App() {
  const slideAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

  const CircleText = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: red;
    overflow: hidden;
    animation: ${slideAnimation} 30s linear infinite;
  `;

  return (
    <div className="App">
      <Header />
      {/* <div style={{position: 'fixed', bottom: 100, right: 100}}>
        <CircleText>
          <svg width="200" height="200">
            <text>
              <textPath xlinkHref="#circle-path">Your Text Here</textPath>
            </text>
            <path
              id="circle-path"
              d="M 190,100 A 90,90 0 0 1 10,100"
              fill="none"
            />
          </svg>
        </CircleText>
        <span style={{position: 'absolute', top: '50%', left: 100}}>{">"}</span>
      </div> */}
      <About />
      <Projects />
      <Services />
      <Approach />
      <Tools />
      <Footer />
    </div>
  );
}

export default App;
