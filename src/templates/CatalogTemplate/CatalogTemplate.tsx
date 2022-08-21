import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/navBar/NavBar'
import './CatalogTemplate.css';
import { useNavigate } from "react-router-dom";

const CatalogTemplate = () => {
  const navigate = useNavigate()
  const [userAuthenticated, setUserAuthenticated] = useState(false)

  useEffect(() => {
    isAuthenticated()
  }, [userAuthenticated])

  const isAuthenticated = () => {
    const authenticationStatus = JSON.parse(localStorage.getItem('isLogged') || 'false')
    setUserAuthenticated(authenticationStatus)
    if (!authenticationStatus) {
      navigate('/login')
    }
  }

  const renderTemplate = () => {
    return (
      <div className='template-container'>
        <section className='template-content'>
          <Outlet />
        </section>
        <NavBar />
      </div>
    )
  }

  return (
    <>
      {renderTemplate()}
    </>
  )

}

export default CatalogTemplate