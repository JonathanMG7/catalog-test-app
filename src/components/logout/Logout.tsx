import { ExitToApp } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import './Logout.css'

const Logout = () => {
  let navigate = useNavigate()

  const handleExit = () => {
    localStorage.setItem('isLogged', 'false')
    localStorage.setItem('favoriteList', '{}')
    navigate('/login')
  }

  return (
    <ExitToApp className='exit-icon' onClick={(e) => handleExit()} />
  )
}

export default Logout