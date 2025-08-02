import Layout from '@/layouts/Layout'
import Home from '@/pages/Home'
import { createBrowserRouter } from 'react-router'
import frontRoutes from './frontRoutes'

export const routes = [
	{
		element: <Layout />,
		path: '',
		children: [
			{
				index: true,
				path: frontRoutes.pages.home,
				Component: Home,
				meta: {
					title: 'Home',
				},
			},
		],
	},
]

const router = createBrowserRouter(routes)
export default router
