
import Root from './Root'
import Citations from './Citations'

export const ROUTES = [
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/pubs",
        element: <Citations />,
    }
]