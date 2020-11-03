import { Component, useState, tags, utils } from '@odoo/owl';

import './app.scss'

const TEMPLATE = tags.xml/*xml*/`
    <div t-name="App" class="reddish" t-on-click="update">Hello <t t-esc="state.text"/>
        
    </div>
`

export class App extends Component {
    static template = TEMPLATE;
    state = useState({ text: "Owl" });
    update() {
        this.state.text = this.state.text === "Owl" ? "World" : "Owl";
    }
}


