let menu = [
    {
        title: 'About 3At',
        router: '/',
        name: 'home',
        hasChild: false,
    },
    {
        title: 'How 3AT Works',
        router: '/how',
        name: 'how',
        hasChild: false,
    },
    {
        title: 'Why Choose 3AT',
        router: '/why',
        name: 'why',
        hasChild: false,
    },
    {
        title: 'Solution',
        // router: '/solution',
        name: 'solution',
        hasChild: true,
        children: [
            {
                title: 'Payment Industry',
                router: '/solution',
                name: 'solution'
            },
            {
                title: 'Games And Virtual Economy',
                router: '/games-and-virtual-economy',
                name: 'solution'
            },
            {
                title: 'Digital Asset Trading Market',
                router: '/digital-asset-trading-market',
                name: 'solution'
            }
        ]
    }
]

export default menu