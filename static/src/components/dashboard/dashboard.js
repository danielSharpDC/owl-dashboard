/** @odoo-module **/

const { Component, onWillStart } = owl;
import { loadJS, loadCSS } from "@web/core/assets";

export class OwlDashboard extends Component {
    setup(){
        onWillStart(async () => {
            await loadCSS("/owl/static/src/components/dashboard/libs/css/styles.min.css");
            await loadJS("/owl/static/src/components/dashboard/libs/jquery.min.js");
            await loadJS("/owl/static/src/components/dashboard/libs/bootstrap.bundle.min.js");
            await loadJS("/owl/static/src/components/dashboard/libs/sidebarmenu.js");
            await loadJS("/owl/static/src/components/dashboard/libs/app.min.js");
            await loadJS("/owl/static/src/components/dashboard/libs/apexcharts.min.js");
            await loadJS("/owl/static/src/components/dashboard/libs/simplebar.min.js");
        })
    }
}

OwlDashboard.template = 'owl.Dashboard'
