import React, { useState } from "react";
import "./App.css";

function App() {
  const [m1, setM1] = useState(false);
  const [m2, setM2] = useState(false);
  const [m3, setM3] = useState(false);
  const [m4, setM4] = useState(false);

  const [m1start, setM1Stop] = useState(false);
  const [m2start, setM2Stop] = useState(false);
  const [m3start, setM3Stop] = useState(false);
  const [m4start, setM4Stop] = useState(false);

  return (
    <main className="app">
      <div className="box1">
        <div className="river">
          <div>
            <span>
              INTAKE <br /> WELL
            </span>{" "}
            <p>Netravati River</p>
          </div>
        </div>

        <div className="pipe-container">
          <div className="pipe"></div>
          <div className="pipe"></div>
          <div className="pipe"></div>
        </div>
        <div className="right-box"></div>
        <div className="pump-chart">
          <li>
            Pump - 1 <span> Manual</span>
          </li>
          <li>
            Pump - 2 <span> Manual</span>
          </li>
          <li>
            Pump - 3 <span> Manual</span>
          </li>
          <li>
            Pump - 4 <span> Manual</span>
          </li>
        </div>
      </div>

      {/* Second part  */}
      <div className="box2">
        <section className="motor">
          <div className="m1">
            <ul className="start-stop-section">
              <li onClick={() => setM1Stop(true)}>Start</li>
              <li onClick={() => setM1Stop(false)}>Stop</li>
              <li>Trip</li>
            </ul>
            <figure className={`redmotor ${m1start ? "active" : ""}`}></figure>
            <div className="open-close-section">
              <button onClick={() => setM1(true)}>Open</button>
              <button onClick={() => setM1(false)}>Close</button>
              <figure className="volve"></figure>

              <div className="motor-pipe" id={m1 ? "m1" : ""}>
                {" "}
              </div>
            </div>
          </div>
          {/* this is m2 part */}
          <div className="m2">
            <ul className="start-stop-section">
              <li onClick={() => setM2Stop(true)}>Start</li>
              <li onClick={() => setM2Stop(false)}>Stop</li>
              <li>Trip</li>
            </ul>
            <figure className={`redmotor ${m2start ? "active" : ""}`}></figure>
            <div className="open-close-section">
              <button onClick={() => setM2(true)}>Open</button>
              <button onClick={() => setM2(false)}>Close</button>
              <figure className="volve"></figure>

              <div className="motor-pipe" id={m2 ? "m2" : ""}>
                {" "}
              </div>
            </div>
          </div>
          {/* this is m3 part */}
          <div className="m3">
            <ul className="start-stop-section">
              <li onClick={() => setM3Stop(true)}>Start</li>
              <li onClick={() => setM3Stop(false)}>Stop</li>
              <li>Trip</li>
            </ul>
            <figure className={`redmotor ${m3start ? "active" : ""}`}></figure>
            <div className="open-close-section">
              <button onClick={() => setM3(true)}>Open</button>
              <button onClick={() => setM3(false)}>Close</button>
              <figure className="volve"></figure>

              <div className="motor-pipe" id={m3 ? "m3" : ""}>
                {" "}
              </div>
            </div>
          </div>
          {/* this is m4 part */}
          <div className="m4">
            <ul className="start-stop-section">
              <li onClick={() => setM4Stop(true)}>Start</li>
              <li onClick={() => setM4Stop(false)}>Stop</li>
              <li>Trip</li>
            </ul>
            <figure className={`redmotor ${m4start ? "active" : ""}`}></figure>
            <div className="open-close-section">
              <button onClick={() => setM4(true)}>Open</button>
              <button onClick={() => setM4(false)}>Close</button>
              <figure className="volve"></figure>

              <div className="motor-pipe" id={m4 ? "m4" : ""}>
                {" "}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* pipe part   */}

      <div className="pipe-vartical">
        <div
          className={
            m1
              ? "water-div-1"
              : m2
              ? "water-div-2"
              : m3
              ? "water-div-3"
              : m4
              ? "water-div-4"
              : ""
          }
        >
          
        </div>
        <div
          className={
            m2 ? "water-div-2" : m3 ? "water-div-3" : m4 ? "water-div-4" : ""
          }
        ></div>
        <div className={m3 ? "water-div-3" : m4 ? "water-div-4" : ""}></div>
        <div className={m4 ? "water-div-4" : ""}></div>
      </div>

      <div
        className="pipe-horizontal"
        id={m1 || m2 || m3 || m4 ? "horizontal" : ""}
      ></div>
    </main>
  );
}

export default App;
