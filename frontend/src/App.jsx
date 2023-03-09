import { useState } from 'react'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavbarReact from './components/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
  <>
    <div>
      <NavbarReact />
    </div>
    <div>
      <Outlet/>
    </div>
    <div>
      <Footer />
    </div>
  
  </>
  );
}

export default App;