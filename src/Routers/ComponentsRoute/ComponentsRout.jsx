import React from 'react';
import Home from '../../Pages/Home/Home';
import ComingSoon from '../../Pages/Components/CommingSoon';

const ComponentsRoute = [
    {
        path: '/components',
        element: <ComingSoon></ComingSoon>,
    },
    {
        path: '/components/name',
        element: <Home />,
    }
]

export { ComponentsRoute }

