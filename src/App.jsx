import React from "react";
import "./App.css";

function App() {
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

      {/* Second part */}
      <div className="box2">
        <section className="motor">
          <div className="m1">
            <ul className="start-stop-section">
              <li>Start</li>
              <li>Stop</li>
              <li>Trip</li>
            </ul>
            <figure className="redmotor"></figure>
            <div className="open-close-section">
              <button>Open</button>
              <button>Close</button>
              <figure className="volve"></figure>

              <div className="motor-pipe"> </div>
            </div>
          </div>
          {/* this is m2 part */}
          <div className="m2">
            <ul className="start-stop-section">
              <li>Start</li>
              <li>Stop</li>
              <li>Trip</li>
            </ul>
            <figure className="redmotor"></figure>
            <div className="open-close-section">
              <button>Open</button>
              <button>Close</button>
              <figure className="volve"></figure>

              <div className="motor-pipe"> </div>
            </div>
          </div>
          {/* this is m3 part */}
          <div className="m3">
            <ul className="start-stop-section">
              <li>Start</li>
              <li>Stop</li>
              <li>Trip</li>
            </ul>
            <figure className="redmotor"></figure>
            <div className="open-close-section">
              <button>Open</button>
              <button>Close</button>
              <figure className="volve"></figure>

              <div className="motor-pipe"> </div>
            </div>
          </div>
          {/* this is m4 part */}
          <div className="m3">
            <ul className="start-stop-section">
              <li>Start</li>
              <li>Stop</li>
              <li>Trip</li>
            </ul>
            <figure className="redmotor"></figure>
            <div className="open-close-section">
              <button>Open</button>
              <button>Close</button>
              <figure className="volve"></figure>

              <div className="motor-pipe"> </div>
            </div>
          </div>
        </section>
        <div className="big-pipe"></div>
      </div>

      {/* pipe part  */}

      <div className="pipe-vartical"> </div>

      <div className="pipe-horizotal"></div>
    </main>
  );
}

export default App;
