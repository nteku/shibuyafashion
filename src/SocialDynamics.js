import React, { useState, useEffect } from "react";
import Header from './components/header/Header';
import Slideshow from "./components/slideshow/SlideShow";
import ImageWithDropdown from "./components/dropdown/Dropdown";
import SecondHeader from "./components/secondHeader/SecondHeader";
import './SocialDynamics.css';


const imageList = [
  "https://1.bp.blogspot.com/-YnPRn648uRU/YKP0LGlYKKI/AAAAAAAAtkM/XCm_5Tldjm8kW9BjhMW0ZSNLM6Y_KD4iACLcBGAsYHQ/s476/image1.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/JapaneseBosozoku.jpg/440px-JapaneseBosozoku.jpg",
  "https://i.pinimg.com/736x/2e/70/fa/2e70fa8e6dcaa6e3335917d554daf532.jpg",
  "https://f4.bcbits.com/img/0006754836_20.jpg",
  "https://cdn.shopify.com/s/files/1/0290/3919/8260/articles/original_1200x1200.jpg?v=1622056299",
  "https://injapan.gaijinpot.com/app/uploads/2012/03/nagomu-gal.jpg"
];




function SocialDynamics (props){

return(

    <div className = "dynamicsPage">
      <Header title = "The Social Dynamics"></Header>

       <br></br>

      <Slideshow imageList={imageList} />


      <br></br>

      <div className = "factors">

       <ul>
       There are some possible factors of the social dynamics behind how popular
       these fashion styles are intricate and diverse.
       <br></br>
       <br></br>
        <li>Youth culture: These fashion styles were started by the youth due to 
            rebelling against cultural norms.
        </li>
        <br></br>
        <li>Urbanization: Advancements in technology and media have facilitated the diffusion of fashion trends and subcultures beyond geographical boundaries, leading to the emergence and evolution of Shibuya fashion styles through cross-cultural influences. </li>
        <br></br>
        <li>Globalization: The globalization of technology and media has facilitated the diffusion of fashion trends and subcultures across geographical boundaries, leading to the evolution of Shibuya fashion styles.</li>
        <br></br>
        <li>Pop Culture: The emergence of Shibuya fashion styles was heavily influenced by Japanese pop culture, which includes various forms of media such as anime, manga, and J-pop. These cultural elements have played a pivotal role in shaping the distinctive aesthetics and themes that are characteristic of Shibuya fashion today. </li>
      

      </ul>
      </div>
    </div>
);



}

export default SocialDynamics;