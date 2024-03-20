import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import('@/pages/Home'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Suspense><Home /></Suspense>
    }
])

export default router