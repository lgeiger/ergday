import * as React from "react";

function getRandomWorkout() {
  const workouts = require("../data/programs.json");
  return workouts[0];
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
