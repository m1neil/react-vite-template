import { CartContext } from '@/context/CartContext'
import { routes } from '@/routes/router'
import cartIcon from '@img/icons/cart.svg'
import { useContext, useMemo } from 'react'
import { NavLink } from 'react-router'
import styles from './Header.module.scss'

function Header() {
	return (
		<div className="header">
			<div className="header__container"></div>
		</div>
	)
}

export default Header
