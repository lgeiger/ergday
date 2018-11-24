import Head from "next/head";
import { Component } from "react";
import seedrandom from "seedrandom";

function getRandomInt(random, min, max) {
  // The maximum is exclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(random * (max - min)) + min;
}

function getRandomWorkout() {
  const workouts = require("../data/workouts.json");
  const day = new Date().toLocaleDateString();
  const index = getRandomInt(seedrandom(day)(), 0, workouts.length);
  return workouts[index];
}

const Workout = ({ workout }) => (
  <div>
    <h3>{`💪 ${workout.title} 💪`}</h3>
    <ul>
      {workout.program.map((item, i) => (
        <li key={`${item}-${i}`}>{item}</li>
      ))}
    </ul>
    <style jsx>{`
      h3 {
        margin: 0;
        margin-block-start: 1em;
      }
      div {
        width: fit-content;
        margin: auto;
        font-size: 5vh;
      }
      ul {
        list-style-type: none;
        padding: 0;
        margin-block-start: 1em;
        margin-block-end: 0;
        line-height: 1.3;
      }
    `}</style>
  </div>
);

export default class extends Component {
  static async getInitialProps() {
    const workout = getRandomWorkout();
    return { workout };
  }

  render() {
    return (
      <div>
        <Head>
          <title>Workout of the day</title>
          <link rel="icon" href="/static/favicon.ico" />
        </Head>
        <h1>Workout of the day</h1>
        <Workout workout={this.props.workout} />
        <a href="https://github.com/lgeiger/ergday#add-a-new-workout">
          suggest a new workout
        </a>
        <style global jsx>{`
          body {
            background: #00bcd4;
            font-family: -apple-system, BlinkMacSystemFont, Roboto, Segoe UI,
              Oxygen, Helvetica Neue, sans-serif;
            margin: 0;
            text-align: center;
          }
        `}</style>
        <style jsx>{`
          h1 {
            color: white;
            font-size: 8vw;
            text-transform: uppercase;
            margin: 0;
            padding-top: 0.5em;
          }

          a {
            color: white;
            opacity: 0.5;
            transition: 0.25s;
            text-decoration: none;
            position: absolute;
            bottom: 1em;
            right: 1em;
          }

          a:hover {
            opacity: 1;
          }
        `}</style>
      </div>
    );
  }
}
