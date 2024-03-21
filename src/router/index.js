import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import('@/pages/Home'))
const Why = lazy(() => import('@/pages/Why'))

const router = createBrowserRouter([
    {
        path: '/home',
        element: <Suspense><Home /></Suspense>
    },
    {
        path: '/',
        element: <Suspense><Why /></Suspense>
    }
])

export default router