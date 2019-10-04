import React from 'react';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import About from './components/about/about';
import AxiosApp from './components/axios/axios';
import AxiosAppNew from './components/axios/axiosNew';
import AxiosAppNewPostById from './components/axios/AxiosAppNewPostById';
import ReduxPostById from './components/axios/ReduxPostById';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="cantainer">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/axios' component={AxiosApp} />
          <Route path='/axiosNew' component={AxiosAppNew} />
          <Route path='/redux/:id' component={ReduxPostById} />
          <Route path='/:id' component={AxiosAppNewPostById} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
