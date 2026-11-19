import React from "react";
import "./atlantis.scss";
import Photo from "../assert/photo/photo.webp";
import Photo1 from "../assert/photo/photo1.webp";
import Photo2 from "../assert/photo/photo2.webp";
import Photo3 from "../assert/photo/photo3.webp";
import Photo4 from "../assert/photo/photo4.webp";
import Img from '../assert/photo/img.webp'
import Img1 from '../assert/photo/img1.webp'
import Img2 from '../assert/photo/img2.webp'
import Img3 from '../assert/photo/img3.webp'
import Img4 from '../assert/photo/img4.webp'
import Img5 from '../assert/photo/img5.webp'
import Img6 from '../assert/photo/img6.webp'
import Img7 from '../assert/photo/img7.webp'
import Img8 from '../assert/photo/img8.webp'
import Img9 from '../assert/photo/img9.webp'
export default function Atlantis() {
  return (
    <div>
           <div className="herobanner">
        <div>
          <img className="img1" src={Photo} alt="" />
        </div>
        <div className="blur"></div>
        <div className="text">
          <div className="texttext">Experience Extraordinary at Dubai’s Most Iconic Resort</div>
        </div>
      </div>  
          <div className="container">
        <div className="firstflex">
          <div>
            <h1>Atlantis Resorts</h1>
          </div>
          <div className="borderb"> </div>
          <div>
            <p>
              Discover a world away from your everyday at our Atlantis resorts
              in Dubai and China. These iconic entertainment resorts are world
              famous for their stunning architecture, unique Rooms and Suites,
              out-of-this-world dining and thrilling attractions such as
              Aquaventure Waterpark.
            </p>
          </div>
        </div>
      </div>     
          <div className="container1">
        <div className="secondgrid">
          <div>
            <img className="animate__animated animate__fadeInDown" src={Photo1} alt="" />
            <h1>Atlantis, The Palm</h1>
            <p>
              This Dubai icon is the ultimate holiday destination for both
              couples and families to make lifetime memories. From
              thrill-seekers to foodies, sun lovers to explorers, there is an
              unforgettable experience for everyone.
            </p>
            <button type="button">Explore</button>
          </div>
          <div>
            <img className="animate__animated animate__fadeInDown wow"  src={Photo2} alt="" />
            <h1>Atlantis, The Palm</h1>
            <p>
              This Dubai icon is the ultimate holiday destination for both
              couples and families to make lifetime memories. From
              thrill-seekers to foodies, sun lovers to explorers, there is an
              unforgettable experience for everyone.
            </p>
            <button type="button">Explore</button>
          </div>
        </div>
      </div>     
           <div className="container2">
        <div className="box1">
          <div className="box2">
            <div className="box2element">
              <h1>World Class Rooms & Suites</h1>
              <p className="boxbborder"></p>
              <p>
                Atlantis resorts are known for their masterfully crafted suites
                and generous room spaces, beautifully appointed with the finest
                amenities for a luxurious and relaxing stay.{" "}
              </p>
              <button type="button">Explore</button>
            </div>
          </div>
        </div>
        <div className="text2">
          <div>
            <img className="photo3" src={Photo3} alt="" />
          </div>
        </div>
      </div>     
         <div className="container3">
        <div className="thirdflex">
          <div className="thirdflexbox">
            <div className="thirdboxflex">
              <div>
                <h1>World’s Largest Waterpark</h1>
                <p className="boxbborder1"></p>
                <p className="">
                  Discover a world of award-winning adventure. A world of water
                  adventures filled with thrilling rides, for the young and the
                  young at heart. Where adventurers ride rapids, whilst thrill
                  seekers defy gravity, and relaxers soak up the sun.
                  Ground-breaking marine animal experiences and once in a
                  lifetime opportunities to interact with the ocean’s most
                  beloved inhabitants.
                </p>
                <button type="button">Explore</button>
              </div>
            </div>
          </div>
          <div>
            <img className="photo4" src={Photo4} alt="" />
          </div> 
        </div>
      </div>    
         <div className="fourflex">
        <div>
          <h1>Exquisite Dining Options</h1>
        </div>
        <div>
          <p className="boxbborder1 "></p>
        </div>
        <div>
          <p>
            You will never struggle to find the perfect meal at Atlantis with
            each resort boasting restaurants from numerous world renowned
            Michelin Star chefs.
          </p>
        </div>
        <div>
          <button type="button">Explore</button>
        </div>
      </div>    
          <div className="scroll">
      <div className="fiveflex">
    <div>
      <img src={Img} alt=""/>
     </div> 
     <div>
      <img src={Img1} alt=""/>
     </div> 
     <div>
      <img src={Img2} alt=""/>
     </div> 
     <div>
      <img src={Img3} alt=""/>
     </div> 
     <div>
      <img src={Img4} alt=""/>
     </div> 
     <div>
      <img src={Img5} alt=""/>
     </div> 
     <div>
      <img src={Img6} alt=""/>
     </div> 
     <div>
      <img src={Img7} alt=""/>
     </div> 
     </div> 
      </div>   
         <div className="container3">
        <div className="thirdflex">
        <div>
            <img className="photo4" src={Img8} alt="" />
          </div>
          <div className="thirdflexbox">
            <div className="thirdboxflex">
              <div>
                <h1>Non-Stop Entertainment</h1>
                <p className="boxbborder1"></p>
                <p className="">
                Atlantis Resorts are the quintessential day through to night entertainment destinations, offering a range of activities suitable for guests of all ages.
                </p>
                <button type="button">Explore</button>
              </div>
            </div>
          </div>
         </div>
      </div>   
        <div className="container2">
         <div className="box1">
          <div className="box2">
            <div className="box2element">
              <h1>AWAKEN Wellness</h1>
              <p className="boxbborder"></p>
              <p>
              Exclusive to Atlantis Dubai, experience a unique holistic spa and wellbeing experience designed to cleanse your body, clear your mind, lift your emotions and stir your spirit. Discover first-of-its-kind holistic therapies and treatments fused with modern technologies, in the most luxurious settings imaginable. Start your transformational journey to unlock the best version of yourself.
              </p>
              <button type="button">Explore</button>
            </div>
          </div>
        </div>
        <div className="text2">
          <div>
            <img className="photo3" src={Img9} alt="" />
          </div>
        </div>
      </div>   
    </div>
  );
}
