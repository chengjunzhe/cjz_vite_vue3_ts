import type { App } from 'vue';

import { Tabs,Card }from 'ant-design-vue';

const components = [Tabs,Card]

export function setupAntd(app: App<Element>):void {
    components.forEach(plugin => {
        app.use(plugin)
    })
}