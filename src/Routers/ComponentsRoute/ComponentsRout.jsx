import React from 'react';
import Home from '../../Pages/Home/Home';

const ComponentsRoute = [
    {
        path: '/component',
        element: <Home></Home>,
    },
    {
        path: '/component/name',
        element: <Home />,
    }
]

export { ComponentsRoute }

