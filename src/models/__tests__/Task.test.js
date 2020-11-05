import Task from "../Task.js";

describe("Task", () => {
  const task1 = new Task("Test the task class");
  const task2 = new Task("Write the rest of the coding challenge");
  test("creates a valid Task instance", () => {
    expect(task1.text).toBe("Test the task class");
    expect(task2.text).toBe("Write the rest of the coding challenge");
  });

  test.todo("throws error on a blank entry");

  test("toggleDone() method toggles isDone property", () => {
    task2.toggleDone();
    expect(task1.isDone).toBe(false);
    expect(task2.isDone).toBe(true);
    task1.toggleDone();
    task2.toggleDone();
    expect(task1.isDone).toBe(true);
    expect(task2.isDone).toBe(false);
    task1.toggleDone();
  });

  test("createdAt property displays human-readable date/time info", () => {
    expect(task1.createdAt).toEqual("a few seconds ago");
  });

  test("updateTask() method changes task text", () => {
    task2.updateTask("New text for the task");
    expect(task2.text).toBe("New text for the task");
  });
});
