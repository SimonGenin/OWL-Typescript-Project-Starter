# OWL Typescript Project Starter

This repo is an example on how to start a real project with the odoo owl framework. 

## Features
- [OWL](https://github.com/odoo/owl)
- Typescript
- Livereload
- [TailwindCSS](https://tailwindcss.com/) + css purging in production

## Installation
This repo is a "template repository". It means you can quickly create repositories based on this one, without it being a fork. 

Otherwise, you may clone it:
```bash
git clone https://github.com/SimonGenin/OWL-Typescript-Project-Starter
```

Install dependencies:
```bash
npm install
```
note: a few postcss dependencies shall be updated once tailwind support for them arrive.

Dev with livereload:
```bash
npm run dev
```

Production build
```bash
npm run build
```

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
Add a test solution. Most likely jest.
