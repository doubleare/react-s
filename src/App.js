import React from 'react';
import Hero from './pages/home/home';
import './App.scss';
import Header from './components/header';
import Footer from './components/footer';
import { Route } from 'react-router-dom';
import Watches from './pages/Watches/Watches';
import './redux/store';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Route exact path='/' component={Hero} />
      <Route path='/home' component={Hero} />
      <Route path='/watches' component={Watches} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
