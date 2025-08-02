import Header from '@/components/Header'
import { Outlet } from 'react-router'
function Layout() {
	return (
		<div className="wrapper">
			<Header />
			<main className="page">
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
