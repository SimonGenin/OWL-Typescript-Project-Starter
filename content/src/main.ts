import { App } from './components/app/app';
import * as owl from "@odoo/owl";

(async () => {
  await owl.utils.whenReady();
  const app = new App();
  await app.mount(document.body);
})();

  