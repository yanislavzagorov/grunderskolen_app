import React from 'react';
import logo from './logo.svg';
import './App.css';

import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, 
  VerticalGridLines, HorizontalBarSeries, VerticalBarSeries,VerticalBarSeriesCanvas,
  ChartLabel,
  } from 'react-vis';

import {curveCatmullRom} from 'd3-shape';



function App() {
  return (
    <div>
      <div className="navbar">
        <h1 className="title">Kroner & Klima</h1>
      </div>

      <div className="wrapper">

        <div className="flex-wrapper-1">
          <div className="stat-box">
            <p>Strømbruk nå</p>
            <p>50kWh</p>
          </div>

          <div className="stat-box">
            <p>Penger spart siste måned</p>
            <p>1,500kr</p>
          </div>
        </div>

        <XYPlot className="chart" width={300} height={300} stackBy="x" title="Hell">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <HorizontalBarSeries data={[{y: 2, x: 10}, {y: 4, x: 5}, {y: 5, x: 15}]} />
          <HorizontalBarSeries data={[{y: 2, x: 12}, {y: 4, x: 2}, {y: 5, x: 11}]} />
        </XYPlot>



        <XYPlot className="chart" width={300} height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />
          <ChartLabel 
            text="X Axis"
            className="alt-x-label"
            includeMargin={false}
            xPercent={0.025}
            yPercent={1.01}
            />

          <ChartLabel 
            text="Y Axis"
            className="alt-y-label"
            includeMargin={false}
            xPercent={0.06}
            yPercent={0.06}
            style={{
              transform: 'rotate(-90)',
              textAnchor: 'end'
            }}
            />
          <LineSeries
            className="first-series"
            data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
          />
          <LineSeries className="second-series" data={null} />
          <LineSeries
            className="third-series"
            curve={'curveMonotoneX'}
            data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
            strokeDasharray={'7, 3'}
          />
          <LineSeries
            className="fourth-series"
            curve={curveCatmullRom.alpha(0.5)}
            style={{
              // note that this can not be translated to the canvas version
              strokeDasharray: '2 2'
            }}
            data={[{x: 1, y: 7}, {x: 2, y: 11}, {x: 3, y: 9}, {x: 4, y: 2}]}
          />
        </XYPlot>
      </div>
    </div>
    
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
