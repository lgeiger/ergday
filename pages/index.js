import * as React from "react";
const randomInt = require("random-int");

function getRandomWorkout() {
  const workouts = require("../data/programs.json");
  const index = randomInt(0, workouts.length - 1);
  return workouts[index];
}

export default class extends React.Component {
  static async getInitialProps() {
    const workout = getRandomWorkout();
    return { workout };
  }

  render() {
    return (
      <div>
        <h1>Workout of the day</h1>
        <div>
          <h2>{this.props.workout.title}</h2>
          <ul>
            {this.props.workout.program.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
