import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components'
import MainPage from '../components/Contactform'
import ContactPage from '../pages/ContactPage'

const router = createBrowserRouter([

            {
                element: <Layout/>,
                children: [
                    {
                        path: '/',
                        element: <MainPage/>
                    },
                    {
                        path: '/contact',
                        element: <ContactPage/>
                    },
                ]
            }
        ])
export default router