import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

 function Homepage(props) {
return (
   
  <>
 
   <Header title = "Shibuya Fashion Boutiques" ></Header>
   <Navbar title = "History" secondTitle = "Famous Shops" thirdTitle = "About"></Navbar>
   
  </>
   
   
  );
} 

export default Homepage;