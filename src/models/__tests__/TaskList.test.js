import Task from "../Task";
import TaskList from "../TaskList";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const setupTaskList = () => {
  const myTasks = new TaskList();
  const task1 = new Task("Do the first thing");
  const task2 = new Task("Do the next thing");
  const task3 = new Task("Be sure to do the last thing");
  const notATask = {
    text: "It looks like a task but it is not one!",
    timestamp: 545657765432,
    isDone: false
  };
  // Use Array.push() so the tests don't all depend on addTask()
  myTasks.tasks.push(task1, task2, task3);
  return {
    myTasks,
    task1,
    task2,
    task3,
    notATask
  };
};

const setupTaskListAsync = async () => {
  const task1 = new Task("Do the first thing");
  await delay(25);
  const task2 = new Task("Do the next thing");
  await delay(25);
  const task3 = new Task("Be sure to do the last thing");
  await delay(25);
  const myTasks = new TaskList();
  // Use .push() so that these tests don't depend on addTask()
  myTasks.tasks.push(task1, task2, task3);
  return Promise.resolve({ myTasks, task1, task2, task3 });
};

describe("TaskList.addTask()", () => {
  // Setup empty TaskList to test addTask() function
  const myTasks = new TaskList();
  const { task1, task2, task3, notATask } = setupTaskList();

  test("accepts new tasks", () => {
    myTasks.addTask(task1, task2, task3);
    expect(myTasks.tasks).toEqual(
      expect.arrayContaining([task1, task2, task3])
    );
  });

  test("doesn't accept arguments that aren't Task objects", () => {
    expect(() => {
      myTasks.addTask(notATask);
    }).toThrow();
  });
});

describe("TaskList.getTasks()", () => {
  test("returns an Array of tasks sorted in the order they were created", async () => {
    const { myTasks } = await setupTaskListAsync().then(val => val);
    const listOfTasks = myTasks.getTasks();
    const indexOfOldestTask = listOfTasks.findIndex(
      task => task.text === "Do the first thing"
    );
    const indexOfNewestTask = listOfTasks.findIndex(
      task => task.text === "Be sure to do the last thing"
    );
    expect(indexOfOldestTask).toBe(0);
    expect(indexOfNewestTask).toBe(2);
  });

  test("passing `true` returns list of tasks with completed tasks sorted to bottom", async () => {
    const { myTasks, task2 } = await setupTaskListAsync().then(val => val);
    task2.toggleDone();
    const listOfTasks = myTasks.getTasks(true);
    const indexOfCompletedTask = listOfTasks.findIndex(
      task => task.isDone === true
    );
    const indexOfNewestTask = listOfTasks.findIndex(
      task => task.text === "Be sure to do the last thing"
    );
    expect(indexOfCompletedTask).toBe(2);
    expect(indexOfNewestTask).toBe(1);
  });
});

describe("TaskList.removeTask()", () => {
  test("removes Task object at index [index] of the _tasks array", () => {
    const { myTasks, task1, task2, task3 } = setupTaskList();
    myTasks.removeTask(1);
    // Check myTask.tasks so this test doesn't depend on getTasks()
    expect(myTasks.tasks).toEqual(expect.arrayContaining([task1, task3]));
    expect(myTasks.tasks).toEqual(expect.not.arrayContaining([task2]));
  });
});

describe("TaskList.removeCompletedTasks()", () => {
  test("removes all Tasks where Task.isDone === true", () => {
    const { myTasks, task1, task2, task3 } = setupTaskList();
    // Use .push() so that these tests don't depend on addTask()
    task1.toggleDone();
    task3.toggleDone();
    myTasks.removeCompletedTasks();
    // Check myTask.tasks so this test doesn't depend on getTasks()
    expect(myTasks.tasks).toEqual(expect.arrayContaining([task2]));
    expect(myTasks.tasks).toEqual(expect.not.arrayContaining([task1, task3]));
  });
});
