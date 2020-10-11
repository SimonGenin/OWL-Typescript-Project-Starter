import { Component, useState, tags } from '@odoo/owl';

export class App extends Component {
    state = useState({ text: "Owl" });
    update() {
        this.state.text = this.state.text === "Owl" ? "World" : "Owl";
    }
}