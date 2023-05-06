import React, { useState, useEffect } from "react";
import Header from './components/header/Header';
import SecondNavbar from "./components/secondnavbar/SecondNavbar";
import ImageWithDropdown from "./components/dropdown/Dropdown";
import SecondHeader from "./components/secondHeader/SecondHeader";
import './Styles.css';

function Styles (props){

const items = 
['According to an article by Hannah Martin (2022), "This fashion was originally created in the 1970’s as a retaliation against Japan’s harsh beauty standards for teenage girls, and it reached its peak in the late 90’s and the early 2000’s." (para. 1) ',
 'This type of style was inspired by American styles at the time.', 
 'Gyaru was extremely popular that a substyle called Kogal was formed, which consists of tanned skin, socks that are loose and hair that is bleached.',
 'According to a book by Yuniya Kawamura (2012), "Gyaru wear popular brands sold in Shibuya 109, such as Cecil McBee, Egoist, and Alba Rosa." (p. 52)'];
const items2 =
 ['Was found around the early 1970s based on Hello Kitty',
 'According to an article by the japaneseShop.com (2020), " Kawaii was used to sell cuteness to girls, who chose their products based on kawaiiness. Collective identity and culture were formed around cute dress, accessories and objects, making a large group identity." (para. 8)',
  'Not only is Kawaii Culture still used today, but it is practiced all over the world.',
  'According to an article by Megan Catherine Rose (2022), There is a certain aspect of Kawaii fashion called Decora, in which "Decora uses clashing, vibrant, electric colours, and a wild variety of kawaii versions of monsters, characters, and food which appear as motifs on their clothing." (para. 3)'];
const items3 = 
['Started to gain popularity around the 1980s, 2000s in the west.', 
'According to an article by 440 Industries (2020), "This culture was a mix of Japanese subcultures and made street fashion even more diverse and the best spot for creation." (para. 5)',
'This type of fashion is all about having no rules and wearing whatever you feel like.',
'Just like Gyaru, a subculture of Harajuku was created called Lolita. According to Kawamura (2012), "Lolita fashion was once a fad, but as a fad it has died out because Harajuku subcultures are very much tied to Visual-kei rock bands, which emphasize their costume and makeup, and the popularity of such bands is on the decline." '];
const items4 = 
['Originated in the late 1990s, based off the London and New York punk scene.',
 'According to a website called "Trends in Japan" (2008), " One of the sparks that ignited the trend was the bestselling manga Nana by Yazawa Ai about two girls named Nana, one of whom is a punk singer who dresses in Vivienne Westwood clothes." (para. 5)', 
 'This style is still very popular till this day.'];

 


return(

     <>
                
        <Header title = "Types of Styles"></Header>

          <br></br>
         
        <SecondNavbar title="About" first = "./history" secondTitle="Social Dynamics" second = "./social" thirdTitle = "Works Cited" third = "./workscited"></SecondNavbar>

        <div className = "container">

        <SecondHeader title = "Gyaru Style"></SecondHeader>
        <ImageWithDropdown
        imageUrl="https://i0.wp.com/www.hellolizziebee.com/wp-content/uploads/2019/04/How-to-get-started-in-gyaru-fashion-by-hellolizziebee-photo-by-tokyofashion.jpg?fit=800%2C533&ssl=1"
        items={items}
        />

         
        <br></br>

        <SecondHeader title = "Kawaii Style"></SecondHeader>
        <ImageWithDropdown
        imageUrl="https://itsyourjapan.com/wp-content/uploads/2018/07/Kawaii-Fashion-Get-Kawaii.jpg"
        items={items2}
        />

         
        <br></br>

        <SecondHeader title = "Harajuku Style"></SecondHeader>
        <ImageWithDropdown
        imageUrl="https://cdn.shopify.com/s/files/1/0661/1799/2665/t/1/assets/japanese-fashion-harajuku.jpg?v=1669994237"
        items={items3}
        />

        <br></br>

        <SecondHeader title = "Punk Style"></SecondHeader>
        <br></br>
        <br></br>
        <ImageWithDropdown
        imageUrl="https://64.media.tumblr.com/eb128884a30854ba8e4465d59a3c19b9/tumblr_ojo2bdCmZV1qfvrzvo1_1280.jpg"
        items={items4}
        />

        </div>
      
    </>
);


}


export default Styles;