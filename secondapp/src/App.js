
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import {Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <Menu/>
      <Footer/>
    </>
  );
}

export default App;
