import Vue from "vue";
import VueRouter from "vue-router";
import KkDashboard from "../views/KkDashboard.vue";
import KkHome from "../views/KkHome.vue";
import KkAssignmentOverview from "../views/KkAssignmentOverview.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: KkHome
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: KkDashboard
	},
    {
        path: "/auftraege",
        name: "AssignmentOverview",
        component: KkAssignmentOverview
    },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
