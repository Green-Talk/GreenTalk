import type { RouteObject } from 'react-router-dom';
import { envconfig } from './environment';
import Home from './Page/Home';
import About from './Page/About';
import NotFound from './Page/NotFound';
import Layout from './Layout';

const routes: RouteObject[] = [
    {
        path: envconfig.baseurl, element: <Layout />, children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: '*', element: <NotFound /> } //catch all undefined route
        ]
    }
];

export default routes;
