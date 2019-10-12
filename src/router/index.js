//不需要权限的路由
export const constRoutes = [

]
export default new Router({
    mode:"history",
    base:process.env.BASE_URL,
    routes: constRoutes
})