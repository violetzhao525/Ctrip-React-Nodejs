import { Navigate, useRoutes } from "react-router-dom";
import Login from "@/views/Login";

// * 导入所有router
// const metaRouters = import.meta.globEager("./modules/*.tsx");

// * 处理路由
// export const routerArray = [];
// Object.keys(metaRouters).forEach(item => {
// 	Object.keys(metaRouters[item]).forEach((key) => {
// 		routerArray.push(...metaRouters[item][key]);
// 	});
// });

export const rootRouter = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	},
	// ...routerArray,
	{
		path: "*",
		element: <Navigate to="/404" />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
