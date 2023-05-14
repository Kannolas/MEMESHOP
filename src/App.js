import React from 'react';
import Main from './pages/Main';
import Catalog from './pages/Catalog'
import NotFound from './pages/NotFound';
import Basket from './pages/Basket';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Main/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
