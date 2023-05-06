import React from "react";
import Header from './components/header/Header';
import Navbar from "./components/navbar/Navbar";
import Slideshow from "./components/slideshow/SlideShow";
import './History.css';


 
function History (props){

    const imageList = [
        "https://images-prod.dazeddigital.com/1080/azure/dazed-prod/1280/1/1281911.jpg",
        "https://pic1.zhimg.com/80/v2-f0390fcc16b37d0feb4eaa194f23d5dc_1440w.webp",
        "https://pic3.zhimg.com/80/v2-908aa50f2fa6e08dad514128ff1f6b92_1440w.webp",
        "https://n.sinaimg.cn/sinakd2020525s/228/w428h600/20200525/32a3-itzixrt2844919.jpg",
      ];
    
    return (

        <div className = "page">
        
        <Header title = "Brief Introduction"></Header>

        <br></br>

        <Navbar title="Homepage" first = "./" secondTitle="Styles" second = "./styles" thirdTitle="Social Dynamics"  third = "./social"fourthTitle = "Works Cited" fourth = "./workscited" ></Navbar>

        <br></br>

        <Slideshow imageList={imageList} />

        <br></br>

        <p>
          Shibuya Street Fashion started to orginate in the 1960s. Western culture, particularly American, serving as its main influence.
                                                <br></br>
            According to an article by Jane Pipkin (2020), "the biker style, vintage style, alongside the music and popular 
                                                <br></br>
            
            culture all inspired the ways that the Japanese dressed." (para. 2) There was one specific mall
           
                                                <br></br>
          that pioneered all of these subcultures in Shibuya called Shibuya 109, which is an 8 story mall that contains many
                                                <br></br>
           
           department stores. Later in the 1980s, many different styles emerged as Shibuya Street Fashion reached its prime 
           
                                                <br></br>
           during the economic bubble. Fashion magazines played a major role in the evolution of fashion, 
           
                                                  <br></br>
           with one popular magazine called "FRUiTS" focusing  specifically for Harajuku fashion, which was one 
           
                                                <br></br>
           
           of the first styles to originate in the Shibuya District. According to Pipkin (2020), "This monthly
           
                                               <br></br>
            magazine captured the quirky, punky, colourful, fun and creative spirit of Harajuku fashion." (para. 4)                           
                                                
         </p>

        <br></br>

       
        
        
        </div>
    );

}
// Social dyanmics

export default History;