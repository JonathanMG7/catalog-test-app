import './App.css';
import { Routes, Route } from 'react-router-dom'
import CatalogTemplate from './templates/CatalogTemplate/CatalogTemplate';
import Login from './pages/Login/Login';
import Catalog from './pages/Catalog/Catalog';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<CatalogTemplate />}>
          <Route exact path='/home' element={<Catalog />} />
        </Route>
        <Route exact path='/test' element={<>Holi</>} />
      </Routes>
    </div>
  );
}

export default App;
