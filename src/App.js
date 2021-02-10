import React from "react";
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Search from './Search';
import CardContainer from './CardContainer';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Search />
      <div className="card-wall">
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
