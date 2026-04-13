import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
	layout("routes/layout.tsx", [
		index("routes/home.tsx"),
		route("services", "routes/services.tsx"),
		route("compliance", "routes/compliance.tsx"),
		route("about", "routes/about.tsx"),
		route("contact", "routes/contact.tsx"),
	]),
] satisfies RouteConfig;
