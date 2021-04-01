import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import Pricing from './components/pages/Pricing/Pricing'
import Posts from './components/pages/Posts/Posts';
import styled from 'styled-components';
import React, {useState} from 'react';
import { Modal } from './components/Modal';
import Modalbutton from './components/Modalbutton';
import CardUI from './components/Cards/CardUI';
import Cards from './components/Cards/Cards';



function App() {
  return(
    <> 
 
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services'  component={Services} />
        <Route path='/products'  component={Products} />
        <Route path='/pricing'  component={Pricing} />
        {/* <Route path='/posts'  component={Posts} /> */}
       
      </Switch>
      <Modalbutton />
      <Cards />
      <Pricing />
      <Footer />
    </Router>
   
    </>
  );
}

export default App;

