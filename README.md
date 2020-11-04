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

For the UI, I'm using ElementUI, in keeping with the tooling used at your company. To keep the build small, I import only the components I use. This meant installing `babel-plugin-component`.
