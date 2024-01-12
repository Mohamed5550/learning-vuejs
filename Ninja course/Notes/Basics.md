# Basics of vue

## Instllation

- You can just add the script tag to the html page
- Then you can use vue in your document

## Creating a vue app

- `const app = Vue.createApp()` to initialize vue app
- `app.mount("#app")` to mount the app into the `id="app"` element
- Vue cannot control anything outside the mount element

## Date & templates

- Use `data() = {return {name: "value"}}` inside the `createApp`
- These variables can be uses inside the app div like `{{ name }}`

## Click events

- `v-on:click="js code"`, this works for click events
- You can access any date variables inside the click event
- There is an alias for `v-on:`, which is `@`
- you can define `methods: {action1() {}, action2(){}}` inside the `createApp` to use them in click events, however you can access the variables with `this.varname`
- you can pass parameters to the methods

## Conditional rendering

- Just add `v-if=""`

## Loops

- Just use `v-for="var in list"`

## Attribute binding

- to use dyanmic attributes you can use `v-bind:attr=""`
- there is an alias, just use `:attr=""`

## Dynamic classes

- Just add `:class={class: boolen}`, the bolean here should return true or false, true means the class will be present
