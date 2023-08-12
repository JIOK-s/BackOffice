import {createBrowserRouter, Outlet,} from "react-router-dom";
import salesRouter from "./SalesRouter";
import SidebarMenu from "../pages/SidebarMenu";
import MembersRouter from "./MembersRouter";

const childrenArray = salesRouter.concat(MembersRouter)

const homeRouter = createBrowserRouter([
    {
        path: "/",
        element:
            <div className="App">
                <div className="Sidebar-for-jiok">
                    <SidebarMenu />
                </div>
                <div className="Contents-for-jiok">
                    <Outlet />
                </div>
            </div>
        ,
        children: childrenArray
    },
]);

export default homeRouter