/** @odoo-module **/

import { Component, onMounted } from "@odoo/owl";
import { loadJS, loadCSS } from "@web/core/assets";

export class HomePage extends Component {
    setup() {
        onMounted(() => {
            loadJS("/owl/static/src/components/dashboard/libs/dashboard.js");
        });
    }
}


HomePage.template = "owl.HomePage";
