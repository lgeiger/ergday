# ErgDay :muscle:

Get a new erg workout each day.

## Add a new workout

To add a new workout edit [`data/workouts.json`](data/workouts.json) and send a pull request. Each workout requires a `title` and a `program` array defining the steps in the workout, e.g.:
```json
  {
    "title": "2 x 2k",
    "program": [
      "10 min warmup",
      "2000 m race time + 10 s",
      "3 min rest",
      "2000 m race time + 10 s"
    ]
  }
  ```
