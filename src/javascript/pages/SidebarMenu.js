import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import { childrenArray } from '../routes/HomeRouter';

const SidebarMenu = () => {
    return (
        <div>
            {/*<div>*/}
            {/*    <ul>*/}
            {/*        {childrenArray.map((item) => (*/}
            {/*            <li>{item.path}</li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <nav>
                <ul>
                    {/*{childrenArray.map((item, index) => {*/}
                    {/*    <li key={index}>*/}
                    {/*        <Link to={item.path}>{item.name}</Link>*/}
                    {/*    </li>;*/}
                    {/*})}*/}
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
                    <li>
                        <Link to={`/purchases`}>purchases parent</Link>
                    </li>
                    <li>
                        <Link to={`/purchases/1`}>purchases child</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SidebarMenu;
