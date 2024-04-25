
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import {Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Menuu from './components/Menuu';
import { ChakraProvider } from "@chakra-ui/react";
import BgVideo from './components/BgVideo';


function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <Menu/> 
      <BgVideo/>
      <Footer/>
    </>
  );
}

export default App;
