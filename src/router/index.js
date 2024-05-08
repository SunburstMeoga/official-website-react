import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import('@/pages/About'))
const Why = lazy(() => import('@/pages/Why'))
const How = lazy(() => import('@/pages/How'))
const Solution = lazy(() => import('@/pages/Solution'))
const GamesAndVirtualEconomy = lazy(() => import('@/pages/GamesAndVirtualEconomy'))
const DigitalAssetTradingMarket = lazy(() => import('@/pages/DigitalAssetTradingMarket'))
const Layout = lazy(() => import('@/components/Layout'))
const Loading = lazy(() => import('@/components/Loading'))
// PaymentIndustry
const router = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={<Loading />}><Layout /></Suspense>,
        children: [
            {
                index: true,
                element: <Suspense fallback={<Loading />}><Home /></Suspense>
            },
            {
                path: 'why',
                element: <Suspense fallback={<Loading />}><Why /></Suspense>
            },
            {
                path: 'how',
                element: <Suspense fallback={<Loading />}><How /></Suspense>
            },
            {
                path: 'solution',
                element: <Suspense fallback={<Loading />}><Solution /></Suspense>
            },
            {
                path: 'games-and-virtual-economy',
                element: <Suspense fallback={<Loading />}><GamesAndVirtualEconomy /></Suspense>
            },
            {
                path: 'digital-asset-trading-market',
                element: <Suspense fallback={<Loading />}><DigitalAssetTradingMarket /></Suspense>
            }
        ]
    },

])

export default router