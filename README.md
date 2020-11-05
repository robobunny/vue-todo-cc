# Vue Todo

> Author: William C. Duraney  
> william.duraney@gmail.com  
> https://www.github.com/robobunny

## Project setup
```
npm install
```

To start the dev server: `npm run serve`

To run the unit tests: `npm run test:unit`

To run the end-to-end tests: `npm run test:e2e`

## Initial Requirements

1. The app should display a list of TODOs. If the list is empty, then the text "No Todos" should be displayed.
2. The app should include UI for adding new TODOs to the list. All TODOs should be displayed in the order they were created.
3. Each TODO should include UI for setting and displaying the status of the TODO (i.e., complete or not complete).
4. Each TODO should include UI for deleting the specific TODO and removing it from the list.

## My Solution

With my solution I hope to highlight my ability to write clean, well-tested, well-documented, easy-to-read code. 

Since this is the first thing I've ever built with Vue, I also hope to gain some experience with this framework and demonstrate that I can learn new tools quickly and independently.

### Assumptions

I'm going to assume that the four criteria above are the only criteria for the app, as if they were given to me in a real production environment by a tech lead or someone who had thought through what they wanted me to build. I'm not going to waste a bunch of time building out extra cool features that weren't asked for (according to the wisdom of YAGNI).

### Decisions

I'm going to store the tasks on the browser's `localStorage`. Obviously this has several limitations, like it can easily be deleted and is also limited on space and offers little by way of possible extensibility e.g. via different user logins or encryption. I think it will be sufficient for our purposes though, and much easier than creating a database for the app.

To mimic a call to the serve, (and to flex a bit tbh), I made the `loadTasks()` function wait 2 seconds in order to display a Loading state on my app.

For the UI, I'm using ElementUI, in keeping with the tooling used at your company. To keep the build small, I import only the components I use. This meant installing `babel-plugin-component`. It's the first time I've ever used it, and there's a bit of a learning curve, so things don't look great. I can't get the input form to `flex-grow`, for example.

## What I would do differently

I started this project without ever having used Vue, so I wasn't familiar with the paradigms. If I could start over, I would make better use of Vue's `data` object. I think this is a robust model that would be even more advantageous, the more complicated the back end of the app. Since a todo app doesn't have very complex data structures, relying heavily on `prop`s and `$emit`s doesn't get out of hand.

I did not have enough time to learn the Vue tests well. You can see that my functions and classes are well tested using Jest, but I couldn't get the hang of the Vue testing library quick enough to really make use of it yet.

## Architecture

I try to write my code so that it's pretty self-explanatory, but here's an overview of the architecture, just in case something's not clear:

### src/models

The logic of the app uses two classes: `Task` and `TaskList`, each with methods that pertain to the data they contain.

#### Task

* **Properties**
    * `text` (String) -- the text that the Task should display
    * `timestamp` (Number) -- the timestamp of the task's creation, defaults to `Date.now()` but can be set via the constructor for purposes of loading new Tasks via JSON strings.
    * `isDone` (Boolean) -- whether the task should be displayed as completed
* **Methods**
    * `get createdAt()` -- returns a human-readable string using `moment().fromNow()`
    * `toggleDone()` -- a method to toggle the `isDone` property, usually more elegant and less error-prone than setting it directly

#### TaskList

A new instance of this object gets created when the app loads, it stores the `Task` objects and contains the methods used to manipulate the set of tasks.

* **Properties**
    * `tasks` (Array) -- an array containing `Task` objects
* **Methods**
    * `addTask()` -- checks if an input is a `Task` object and then pushes it to `this.tasks`
    * `getTasks()` -- returns the `tasks` array, with an option to sort completed tasks to the bottom.
    * `removeTask()` -- removes a `Task` from `tasks` via the index passed as an argument

### src/functions

I put the more verbose functions in their own files to keep the `.vue` files a little cleaner. 

* `loadTasks()` -- checks localStorage for JSON data under the `myVueTodoTasks` key and loads them. 
    * Since we're using JSON, only the properties get saved, so the method makes new `Task` objects with the properties it loads and pushes them onto the new `TaskList` object.
* `saveTasks()` -- saves the `Task`s on `TaskList.tasks` to localStorage using `JSON.stringify()`

### src/components

The Vue app is broken into four components:

* `App.vue`
    * `TheHeader.vue`
    * `TasksListAddItemForm.vue`
    * `TasksList.vue`
        * `TaskItem.vue`

#### TheHeader.vue

This displays the Vue logo, the app name, and my name. Pretty basic.

#### TasksListAddItemForm.vue

This is the form to add a new task. It binds the value of the input element to an object in the component's `data` that gets passed to the `new Task()` call when the form is submitted.

The form validates your submission and won't let you create a task without any text

#### TasksList.vue

This component receives the `TaskList` object as a prop and displays the list of tasks using `v-for`. It also handles several of the function calls that manipulate the list of tasks.

#### TaskItem.vue

This component displays the individual task, a "Created at" string, a button for marking it as complete and a button for removing the task (each of which triggers an `$emit`).