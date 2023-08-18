import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import { childrenArray } from '../routes/HomeRouter';

const SidebarMenu = () => {
    return (
        <div>
            <nav>
                <ul>
                    {
                        childrenArray.map((item, index) => {
                            return(
                                <li key={index}>
                                    <Link to={item.path}>{item.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    );
};

export default SidebarMenu;
