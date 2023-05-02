import React, { useState, useEffect } from "react";
import Header from './components/header/Header';
import ImageWithDropdown from "./components/dropdown/Dropdown";
import SecondHeader from "./components/secondHeader/SecondHeader";
import './WorksCited.css';

function WorksCited (props){

return(

    <div className = "citedpge">
    
    <Header title = "Works Cited"></Header>

    <br></br>
    <br></br>
    <div className = "links">

     <li>440 Industries.  Harajuku Fashion History: A Case Study, 2021,
     <br></br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; https://440industries.com/harajuku-fashion-history-a-case-study/</li>
     <br></br>


     <li>Pipkin, Jane. "World Fashion: A Brief History of Tokyo Street Fashion." Lippy Magazine, 8 Oct. 2021, 
     <br></br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; https://www.lippymag.com/post/world-fashion-a-brief-history-of-tokyo-street-fashion. </li>
     <br></br>

     <li>The History of Japanese Kawaii Culture". The Japanese Shop, 2021, 
     <br></br> &nbsp; &nbsp; &nbsp; &nbsp; https://thejapaneseshop.co.uk/blogs/japan/what-is-japanese-kawaii-culture#:&nbsp;&nbsp;~:text=The%20History%20of%20Japanese%20Kawaii,of%20love%2C%20care%20and%20protectiveness.</li>
     <br></br>

     <li>Valora, Jackson. "The History of Gyaru: A Fashion Rebellion". Valor Dictus, 22 November 2022, 
     <br></br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; https://valor-dictus.com/artsentertainment/2022/11/22/the-history-of-gyaru-a-fashion-rebellion/.</li>
     <br></br>
     <li>Web Japan. "Harajuku Fashion." Web Japan, 21 Nov. 2008, 
     <br></br> &nbsp; &nbsp; &nbsp; &nbsp; https://web-japan.org/trends/08_fashion/fas081121.html.</li>


    </div>
    
    </div>
);



}

export default WorksCited;