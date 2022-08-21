import './App.css';
import { Routes, Route } from 'react-router-dom'
import CatalogTemplate from './templates/CatalogTemplate/CatalogTemplate';
import Login from './pages/Login/Login';
import Catalog from './pages/Catalog/Catalog';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<CatalogTemplate />}>
          <Route exact path='/home' element={<Catalog />} />
          <Route exact path='/pokemon/:pokemonName/detail' element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
