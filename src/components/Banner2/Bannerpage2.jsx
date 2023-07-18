import React from "react";
import image from "../../assets/image/face (1).jpg";
import image2 from "../../assets/image/face (2).jpg";
import image3 from "../../assets/image/face (3).jpg";
import image4 from "../../assets/image/face (4).jpg";
import image5 from "../../assets/image/face (5).jpg";
import image6 from "../../assets/image/face.jpg";


import { showDialog } from 'https://codepen.io/bramus/pen/ZEqMOLz/cccfe67c2b9cdfbeb5fb59083dbd0a64.js';


const Bannerpage2 = () => {

  // showDialog('https://scroll-driven-animations.style/demos/stacking-cards/css/');

  

  return (
    <div>
     

      <ul id="cards" className="" >
        <li className="card " id="card_1">
          <div className="card__content  bg-[#FEF8F7]  min-h-screen ">
            <div className="img-text">
              <h3>FlipaClip</h3>
              <p >The best tool for frame-by-frame animation</p>
              <p>web, development, product</p>
            </div>
            <figure>
              <img src={image} alt="Face 6" />
            </figure>
          </div>
        </li>

        <li className="card" id="card_2">
          <div className="card__content bg-[rgb(217,233,193)] min-h-screen"> 
            <div className="img-text">
              <h3>Riyadh</h3>
              <p>Official website of Riyadh, Saudi Arabia's capital</p>
              <p>design, development, product</p>
            </div>
            <figure>
              <img src={image2} alt="Face 2" />
            </figure>
          </div>
        </li>
        <li className="card" id="card_2">
          <div className="card__content bg-[#FFF3F0] min-h-screen">
            <div className="img-text">
              <h3>uLesson</h3>
              <p> Online platform</p>
              <p>        for distance learning</p>
              <p>          web, mobile, product</p>


            </div>
            <figure>
              <img src={image3} alt="Face 2" />
            </figure>
          </div>
        </li>
        <li className="card" id="card_2">
          <div className="card__content bg-[#FEF8F7] min-h-screen" >
            <div className="img-text">
              <h3>Nana Asia</h3>
              <p> Asia’s digital magazine,        </p>
              <p>        powered by women</p>
              <p>          web, design, development</p>

            </div>
            <figure>
              <img src={image6} alt="Face 2" />
            </figure>
          </div>
        </li>
        <li className="card" id="card_2">
          <div className="card__content bg-[#F4EDF5] min-h-screen">
            <div className="img-text">
              <h3>Sleepiest</h3>
              <p>     Sleep app helps millions</p>
              <p>     fall asleep every night</p>
              <p>       branding, design, mobile, product</p>

            </div>
            <figure>
              <img src={image4} alt="Face 2" />
            </figure>
          </div>
        </li>
        <li className="card" id="card_2">
          <div className="card__content bg-[#ebf9f4] min-h-screen">
            <div className="img-text">
              <h3>Ferrumpipe</h3>
              <p>       Galvanized steel metal</p>
              <p>      frame manufacturer</p>
              <p>        branding, design, development, product</p>

            </div>
            <figure>
              <img src={image5} alt="Face 2" />
            </figure>
          </div>
        </li>
      </ul>



     
    </div>
  );
};

export default Bannerpage2;
