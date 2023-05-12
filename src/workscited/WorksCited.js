import React from "react";
import Header from '../components/header/Header';
import Navbar from "../components/navbar/Navbar";
import './WorksCited.css';

function WorksCited (props){

return(

    <div className = "citedpge">
    
    <Header title = "Works Cited"></Header>

    <br></br>
    <Navbar title="Home" first = "./" secondTitle="About" second = "./history" thirdTitle="Styles"  third = "./styles"fourthTitle = "Social Dynamics" fourth = "./social" ></Navbar>
    <br></br>
    <div className = "links">

     <li>440 Industries.  Harajuku Fashion History: A Case Study, 2021,
     <br></br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; https://440industries.com/harajuku-fashion-history-a-case-study/</li>
     <br></br>

     <li>Kawamura, Yuniya. "Fashioning Japanese Subcultures.", 2012, Berg Publishers.</li>
     <br></br>

     <li>Martin, Hannah. "The History of Gyaru: A Fashion Rebellion". Valor Dictus, 22 November 2022, 
     <br></br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; https://valor-dictus.com/artsentertainment/2022/11/22/the-history-of-gyaru-a-fashion-rebellion/.</li>
     <br></br>
     <li>Pipkin, Jane. "World Fashion: A Brief History of Tokyo Street Fashion." Lippy Magazine, 8 Oct. 2021, 
     <br></br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; https://www.lippymag.com/post/world-fashion-a-brief-history-of-tokyo-street-fashion. </li>
     <br></br>

     <li>Rose, M. C., Kurebayashi, H., & Saionji, R. (2022). Kawaii Affective Assemblages: Cute New Materialism 
        <br></br>in Decora Fashion, Harajuku. M/C Journal, 25(4). https://doi.org/10.5204/mcj.2926 (Original work published October 5, 2022)</li>
     <br></br>

     <li>The History of Japanese Kawaii Culture". The Japanese Shop, 2021, 
     <br></br> &nbsp; &nbsp; &nbsp; &nbsp; https://thejapaneseshop.co.uk/blogs/japan/what-is-japanese-kawaii-culture#:&nbsp;&nbsp;~:text=The%20History%20of%20Japanese%20Kawaii,of%20love%2C%20care%20and%20protectiveness.</li>
     <br></br>

     <li>The Japanese Shop. (n.d.). What is Japanese Kawaii Culture? The Japanese Shop.
     <br></br> https://thejapaneseshop.co.uk/blogs/japan/what-is-japanese-kawaii-culture#:~:text=Kawaii%20was%20used%20to%20sell,was%20popular%20in%20Japanese%20schools.</li>
     <br></br>
     <li>Web Japan. "Harajuku Fashion." Web Japan, 21 Nov. 2008, 
     <br></br> &nbsp; &nbsp; &nbsp; &nbsp; https://web-japan.org/trends/08_fashion/fas081121.html.</li>


    </div>
    
    </div>
);



}

export default WorksCited;