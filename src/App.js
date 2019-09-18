import React from 'react';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import About from './components/about/about';
import AxiosApp from './components/axios/axios';
import AxiosAppNew from './components/axios/axiosNew';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="cantainer">
        <Navbar/>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/axios' component={AxiosApp} />
        <Route path='/axiosNew' component={AxiosAppNew} />
      </div>
    </BrowserRouter>
  );
}

export default App;
