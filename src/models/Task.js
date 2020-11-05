import moment from "moment";

export default class Task {
  text;
  timestamp;
  isDone;
  constructor(text, timestamp = Date.now(), isDone = false) {
    this.text = text;
    this.timestamp = timestamp;
    this.isDone = isDone;
  }

  get createdAt() {
    return moment(this.timestamp).fromNow();
  }

  toggleDone() {
    this.isDone = !this.isDone;
  }

  updateTask(string) {
    this.text = string;
  }
}
