import Vue from 'vue';
import VueRouter from "vue-router";
import Playground from "./components/Playground";
import Props from "./components/10_Props/Props";
import DynamicComponents from "./components/20_DynamicComponents/DynamicComponents";
import Slots from "./components/30_Slots/Slots";
import Directives from "./components/40_Directives/Directives";
import BaseComponents from "./components/50_BaseComponents/BaseComponents";
import Mixins from "./components/60_Mixins/Mixins";

Vue.use(VueRouter);

const navDrawerRoutes = [
    {
        path: '/props',
        component: Props,
        name: 'Props',
    },
    {
        path: '/dynamic-components',
        component: DynamicComponents,
        name: 'Dynamic Components',
    },
    {
        path: '/slots',
        component: Slots,
        name: 'Slots',
    },
    {
        path: '/directives',
        component: Directives,
        name: 'Directives',
    },
    {
        path: '/base-components',
        component: BaseComponents,
        name: 'Base Components',
    },
    {
        path: '/mixins',
        component: Mixins,
        name: 'Mixins',
    },
];

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Playground,
    },
    ...navDrawerRoutes,
];

export {navDrawerRoutes};

export default new VueRouter({
    routes,
    mode: 'history',
});
