import { useEffect, useState } from 'react'
import { NavItemProps } from './NavItem.types'
import './NavItem.css'

const NavItem = (props: NavItemProps) => {
  const {
    icon,
    name,
    isActive
  } = props

  const [activeClass, setActiveClass] = useState('')

  useEffect(() => {
    setActiveClass(isActive ? 'active' : '')
  }, [isActive])

  return (
    <div className={`navigation-item ${activeClass}`}>
      {icon({ className: 'navigation-icon' })}
      {name}
    </div>
  )

}

export default NavItem