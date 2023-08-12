import React from "react";
import { Outlet, Link } from "react-router-dom";

const SidebarMenu = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={`/sales`}>sales parent</Link>
                    </li>
                    <li>
                        <Link to={`/sales/1`}>sales child</Link>
                    </li>
                    <li>
                        <Link to={`/members`}>members parent</Link>
                    </li>
                    <li>
                        <Link to={`/members/1`}>members child</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SidebarMenu