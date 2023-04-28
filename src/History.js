import React, { useState, useEffect } from "react";
import Header from './components/header/Header';
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

        <>
        
        <Header title = "Brief Introduction"></Header>

        <br></br>

        <Slideshow imageList={imageList} />

        <br></br>

        <p>
          Shibuya Street Fashion started to orginate in the 1960s. Western culture, specifically American, was the main influence
                                                <br></br>
           when it came to this type of street wear. According to an article by Jane Pipkin, "the biker style, vintage style, 
                                                <br></br>
           alongside the music and popular culture all inspired the ways that the Japanese dressed." Later in the 80s, many types
                                                <br></br> 
           of styles have been created as it started to reach it's prime while the economic bubble occured. 
           
                                                <br></br>
                                                
          Fashion magazines played a major role in fashion as well. One fashion magazine that took over was called "FRUiTS magazine",.
                                                <br></br>
            specifically for Harajuku fashion, which was one of the first type of styles that was originated in the Shibuya District.
                                                <br></br>
                    According to an article by Jane Pipkin, "This monthly magazine captured
                                                <br></br> 
           the quirky, punky, colourful, fun and creative spirit of Harajuku fashion."                             
                                                
         </p>

        <br></br>

       
        
        
        </>
    );

}
// Social dyanmics

export default History;