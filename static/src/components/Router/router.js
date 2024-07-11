/** @odoo-module **/

import { Component, xml, useState } from "@odoo/owl";
import { registry } from '@web/core/registry';
import {HomePage} from "../home";
import {PartnerPage} from "../partner";
import {OwlDashboard} from "../dashboard/dashboard";

export class Router extends Component {
    static components = { OwlDashboard, HomePage, PartnerPage };
    static template = xml`
        <div>
            <OwlDashboard navigate="navigate">
                <t t-if="state.currentRoute === 'home'">
                    <HomePage navigate="navigate"/>
                </t>
                <t t-if="state.currentRoute === 'partner'">
                    <PartnerPage navigate="navigate"/>
                </t>
            </OwlDashboard>
        </div>
    `;
    state = useState({ currentRoute: 'home' });

    setup() {
        this.navigate = this.navigate.bind(this);
    }

    navigate(route) {
        this.state.currentRoute = route;
    }
}

registry.category('actions').add('owl.action_dashboard_js', Router);