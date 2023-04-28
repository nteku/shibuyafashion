import React, { useState, useEffect } from "react";
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Slideshow from "./components/slideshow/SlideShow";
import './Homepage.css';

const imageList = [
  "https://tokyofashion.com/wp-content/uploads/2011/10/Shibuya-Gyaru-Culture-Japan-003.jpg",
  "https://ninjacosmico.com/wp-content/uploads/2021/11/Harajuku-Girls.jpg",
  "https://assets.vogue.com/photos/5c93d723ba40920f82289469/1:1/w_2250,h_2250,c_limit/00-promo-tokyo-ss-roundup.jpg",
  "https://assets.vogue.com/photos/6314e864543b719723587261/3:2/w_3000,h_2000,c_limit/tokyo-fashion-week-ss23-street-style-day6-014.jpg",
  "https://media.tenor.com/1pDqTTjuXhcAAAAM/verne-stare.gif"
];
function Homepage(props) {
   

  return (
    <>
      <Header title="Shibuya Fashion by Nathan Teku"></Header>
      <br></br>
      <Navbar title="About" secondTitle="Styles" thirdTitle="Social Dynamics" fourthTitle = "Works Cited"></Navbar>
      <br></br>
      <Slideshow imageList={imageList} />
      
    </>
  );
}

export default Homepage;