import {createBrowserRouter, Outlet,} from "react-router-dom";

import SidebarMenu from "../pages/SidebarMenu";
import salesRouter from "./SalesRouter";
import membersRouter from "./MembersRouter";
import purchasesRouter from "./PurchasesRouter";

import '../../App.css';
import '../styles/SidebarMenu.css';
import '../styles/Contents.css';

const main = [
    {
        path: "/",
        element: <div>home 입니당</div>
    },
    {
        path: "/home",
        element: <div>home 입니당</div>
    }
];

export const childrenArray = main
    .concat(salesRouter)
    .concat(membersRouter)
    .concat(purchasesRouter);

export const homeRouter = createBrowserRouter([
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