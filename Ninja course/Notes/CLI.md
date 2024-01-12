# Vue CLI

## Why to use CLI?

- Sse modern javascript features
- provides us with a live-reload dev server
- optimize our code for production

## Installing the CLI

- first install npm in your machine
- then type `npm install -g @vue/cli` to install the vue globally
- type `vue create project-name` to create new vue project

## Project structure

- The `node_modules` folder: contains the required packages for the application
- The `public` folder: contains the index file of the project
- The `src` folder: contains our application code
- The app HTML code put indside the `<template></template>`
- The tempalte `ref` is used to call an element in vue code

## Multiple components

- `App.vue` is the root component
- Define child components under `src/components` folder. They must have `.vue` extension
- You can import the comopnent in other component using `import` then add it to the app components
- to make the style affect only the current component use `<style scoped>` instead of `<style>`
- to import a global css file use `import ./file/path` in `App.vue`

### props

- You can use props to share variables between components
- add them as attribute to component calling tag
- add them into props in the main component
- export them in the component, then you can use them

## Emitting custom events

- you can emit an event from any component and listen to it in another component
- use `this.emit('event')` to emit an event to the item
- use @event to listen for that event

## Click event modifiers

- you can add conditions on the click even with the `.` like `click.right` for right click
- you can require shift with the click with `click.shift`
- you can require the click to be on the element itselt without childrent with `click.self`

## Slots

- to pass data inside the component when calling it you can add anything between its open and close tags
- then you can use `<slot></slot>` in the component to call this data

### Named slots

- to keep the structure of the component we need to add more than one slot
- we can do this by using named slots
- we make a named slots by adding its content inside `<template v-slot:name></template>`
- we use it by calling `<slot name='name'></slot>`

## Teleport component

- use `<teleport to='selector'></teleport>` to make the component move into that element instead of `#app`