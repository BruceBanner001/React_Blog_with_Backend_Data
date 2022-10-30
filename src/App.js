import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import SiteName from './Components/SiteName';
import Tourism from './Pages/Tourism';
// import Food from './Pages/Food';
// import Hollywood from './Pages/Hollywood';
// import Home from './Pages/Home';
// import Kollywood from './Pages/Kollywood';
// import Technology from './Pages/Technology';
import './Pages/style.css';
import SeparateArticalView from './Components/SeparateArticalView';
import './Components/SeparateArticalView.css';

function App() {
  return (
    <>
      <SiteName />
        <BrowserRouter>
          <Navigation />
          <Routes>
          <Route path='/' element={<Tourism />} />
          <Route path='/:catagory/:id' element={<SeparateArticalView />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
