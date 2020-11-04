# OWL Typescript Project Starter

This repo is an example on how to start a real project with the odoo owl framework. 

## Features
Typescript
Livereload
TailwindCSS + css purging in production

## Components
It is expected to create components in one file, following this convention:
```ts
import { Component, useState, tags } from "@odoo/owl";

const TEMPLATE = tags.xml/*xml*/ `
    <div t-name="App" class="bg-white shadow m-8 p-2 rounded cursor-pointer" t-on-click="update">Hello <t t-esc="state.text"/>

    </div>
`;

export class App extends Component {
  static template = TEMPLATE;
  state = useState({ text: "Owl" });
  update() {
    this.state.text = this.state.text === "Owl" ? "World" : "Owl";
  }
}
```
The template is defined in the file on the top and has tailwindcss classes. 

## Styles
As it uses Tailwind and its config file, not much has been done to add your own style rules. 
I'm still working on a nice solution.

## Roadmap
Clear separation between custom style, template and logic. 
