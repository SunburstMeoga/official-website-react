import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import('@/pages/Home'))
const Why = lazy(() => import('@/pages/Why'))
const How = lazy(() => import('@/pages/How'))
const Solution = lazy(() => import('@/pages/Solution'))
const GamesAndVirtualEconomy = lazy(() => import('@/pages/GamesAndVirtualEconomy'))
const DigitalAssetTradingMarket = lazy(() => import('@/pages/DigitalAssetTradingMarket'))
const Layout = lazy(() => import('@/components/Layout'))
// PaymentIndustry
const router = createBrowserRouter([
    {
        path: '/',
        element: <Suspense><Layout /></Suspense>,
        children: [
            {
                index: true,
                element: <Suspense><Home /></Suspense>
            },
            {
                path: 'why',
                element: <Suspense><Why /></Suspense>
            },
            {
                path: 'how',
                element: <Suspense><How /></Suspense>
            },
            {
                path: 'solution',
                element: <Suspense><Solution /></Suspense>
            },
            {
                path: 'games-and-virtual-economy',
                element: <Suspense><GamesAndVirtualEconomy /></Suspense>
            },
            {
                path: 'digital-asset-trading-market',
                element: <Suspense><DigitalAssetTradingMarket /></Suspense>
            }
        ]
    },

])

export default router