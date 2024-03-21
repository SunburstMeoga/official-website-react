import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import('@/pages/Home'))
const Why = lazy(() => import('@/pages/Why'))
const How = lazy(() => import('@/pages/How'))
const router = createBrowserRouter([
    {
        path: '/',
        element: <Suspense><Home /></Suspense>
    },
    {
        path: '/why',
        element: <Suspense><Why /></Suspense>
    },
    {
        path: '/how',
        element: <Suspense><How /></Suspense>
    }
])

export default router