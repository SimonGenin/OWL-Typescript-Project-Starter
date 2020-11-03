import { App } from './components/app/app';
import { utils } from "@odoo/owl";

(async () => {
  const app = new App();
  await utils.whenReady();
  await app.mount(document.body);
})();


