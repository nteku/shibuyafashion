import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
 
import './Homepage.css';


 function Homepage(props) {
return (
   
  <>
 
   

  <Header title = "Shibuya Fashion Boutiques" ></Header>
  <Navbar title = "History" secondTitle = "Famous Shops" thirdTitle = "About"></Navbar>
 
 
 <img src = "https://www.tokiotours.com/wp-content/uploads/2013/10/Shibuya-night-tour.jpg">

 </img>
    
   
  </>
   
   
  );
} 

export default Homepage;