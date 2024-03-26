import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import('@/pages/Home'))
const Why = lazy(() => import('@/pages/Why'))
const How = lazy(() => import('@/pages/How'))
const Solution = lazy(() => import('@/pages/Solution'))
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
    },
    {
        path: '/solution',
        element: <Suspense><Solution /></Suspense>
    }
])

export default router