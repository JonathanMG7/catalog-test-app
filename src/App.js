import './App.css';
import { Routes, Route } from 'react-router-dom'
import CatalogTemplate from './templates/CatalogTemplate/CatalogTemplate';
import Login from './pages/Login/Login';
import Catalog from './pages/Catalog/Catalog';
import Detail from './pages/Detail/Detail';
import Favorites from './pages/Favorites/Favorites'
import Logout from './components/logout/Logout';

function App() {
  return (
    <div className='App'>
      <Logout />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<CatalogTemplate />}>
          <Route exact path='/home' element={<Catalog />} />
          <Route className='route' exact path='/favorites' element={<Favorites />} />
          <Route className='route' exact path='/pokemon/:pokemonName/detail' element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
