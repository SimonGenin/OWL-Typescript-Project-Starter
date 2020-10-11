import { Component, useState, tags } from '@odoo/owl';

export class App extends Component {
    static template = tags.xml`<div>coucou</div>`
    state = useState({ text: "Owl" });
    update() {
        this.state.text = this.state.text === "Owl" ? "World" : "Owl";
    }
}

