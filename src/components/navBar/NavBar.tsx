import { navBarItems } from './NavBar.consts'
import './NavBar.css'
import NavItem from '../naviItem/NavItem'
import { Home, Favorite } from '@material-ui/icons'
import { NavBarItem } from './NavBar.types'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('')
  let navigate = useNavigate()

  const isActive = (route: string) => {
    return route === activeTab
  }

  const getIcon = (icon: string, props: any) => {
    switch (icon) {
      case 'favorite':
        return <Favorite className={props.className} />
      case 'home':
      default:
        return <Home className={props.className} />
    }
  }

  const handleRedirection = (route: string) => {
    setActiveTab(route)
    navigate(route)
  }

  const renderNavItem = (item: NavBarItem) => {
    const itemProps = {
      name: item.name,
      isActive: isActive(item.redirectsTo),
      icon: (props: any) => getIcon(item.icon, props),
      onClick: handleRedirection,
      redirectsTo: item.redirectsTo
    }
    return <NavItem key={item.name} {...itemProps} />
  }

  return (
    <nav className='navigation-bar'>
      {navBarItems.map(item => renderNavItem(item))}
    </nav>
  )
}

export default NavBar