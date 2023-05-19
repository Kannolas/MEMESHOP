import React from 'react';
import Main from './pages/Main';
import Catalog from './pages/Catalog'
import NotFound from './pages/NotFound';
import Basket from './pages/Basket';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reviews from './pages/Reviews';
import Terms from './pages/Terms';
import Licence from './components/Licence';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Main/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/TermsOfService' element={<Terms/>}/>
          <Route path='/License' element={<Licence/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
