import React from "react";
import "./secondpage.scss";
import Arrow from "../../assert/photo/arrow.png";
import Mail from "../../assert/photo/mail.png";
import Logo1 from "../../assert/photo/logo1.webp";
import Location from "../../assert/photo/location.png";
import Hero from "../../assert/photo/hero.webp";
import Inc from "../../assert/photo/incorrect.png";
import Add from "../../assert/photo/add.png";
import Photo5 from "../../assert/photo/photo5.webp";
import Img10 from "../../assert/photo/img10.jpg";
import Banner from "../../assert/photo/banner.webp";
import Img11 from "../../assert/photo/img11.webp";
import Img12 from "../../assert/photo/img12.jpg";
import Img13 from "../../assert/photo/img13.webp";
import Photo6 from "../../assert/photo/photo6.webp";
import Photo7 from "../../assert/photo/photo7.webp";
import Img14 from "../../assert/photo/img14.webp";
import Img15 from "../../assert/photo/img15.webp";
import Img16 from "../../assert/photo/img16.jpg";
import Banner1 from '../../assert/photo/banner1.jpg'
import Banner2 from '../../assert/photo/banner2.jpg'
import Logo from '../../assert/photo/logo.webp'
export default function Secondpage() {
  return (
    <div>
      <div className="footerback">
        <p className="footerp">
          Coming to visit Aquaventure for the day? Explore all our experiences🔱
        </p>
        <div className="footerflex">
          <div className="footerflexone">
            <div className="footerflextwo">
              <div>
                <p>EN</p>
              </div>
              <div>
                <img src={Arrow} alt="" />
              </div>
            </div>
            <div>
              <img src={Mail} alt="" />
            </div>
            <div>
              <img src={Location} alt="" />
            </div>
            <div>
              <p>EXPLORE THE DESTINATION</p>
            </div>
          </div>
          <div>
            <img src={Logo1} alt="" />
          </div>
          <div>
            <button type="button">BOOK NOW</button>
          </div>
        </div>
        <div className="footerlastflex">
          <div>
            <p>OFFERS</p>
          </div>
          <div>
            <p>Stays</p>
          </div>
          <div>
            <p>Dining</p>
          </div>
          <div>
            <p>Entertainment</p>
          </div>
          <div>
            <p>Aquaventure</p>
          </div>
          <div>
            <p>Experiences</p>
          </div>
          <div>
            <p>Events</p>
          </div>
        </div>
      </div>
      <div className="firstpage">
        <div>
          <img src={Hero} alt="" />
        </div>
        <div className="firsttext">
          <h1>Dubai’s Most Iconic Resort</h1>
          <p>Dive into a world of iconic stays & unforgettable adventures</p>
          <button type="button">Explore</button>
        </div>
      </div>
      <div className="firstbox">
        <div>
          <p> Check-in/Check-out</p>
          <input className="inputname" type="name" placeholder="SELECT DATES" />
        </div>
        <div>
          <p> Adults</p>
          <div className="firstboxone">
            <div>
              <img src={Inc} alt="" />
            </div>
            <div>
              <span>2</span>
            </div>
            <div>
              <img src={Add} alt="" />
            </div>
          </div>
        </div>
        <div>
          <p>Children</p>
          <div className="firstboxone">
            <div>
              <img src={Inc} alt="" />
            </div>
            <div>
              <span>2</span>
            </div>
            <div>
              <img src={Add} alt="" />
            </div>
          </div>
        </div>
        <div>
          <p> Promo Code</p>
          <input
            className="inputcode"
            type="code"
            name=""
            value=""
            placeholder=""
          />
        </div>
        <div>
          <button type="button">Check Availability</button>
        </div>
      </div>
      <div className="container6">
        <div className="flex6">
          <div>
            <h1>A World Away</h1>
          </div>
          <div>
            <p className="lineborder"></p>
          </div>
          <div>
            <p>
              Nestled between the turquoise waters of the Arabian Gulf and
              majestic Dubai skyline, Atlantis, The Palm is an iconic
              destination resort that will take you a world away. Being more
              than just a Dubai beach hotel, our world-renowned resort is a
              premiere dining destination offering award-winning & celebrity
              chef restaurants and is home to the world’s largest waterpark at
              Aquaventure World, where thrillseekers and chillaxers alike can
              take on everything it has to offer.
            </p>
          </div>
        </div>
      </div>
      <div className="secondback2">
        <div>
          <h1>Iconic Rooms & Suites</h1>
          <p className="lineborder"></p>
          <p>
            All stays include daily complimentary access to the world’s largest
            waterpark at Aquaventure World and The Lost Chambers Aquarium, home
            to over 65,000 marine animals.
          </p>
        </div>
        <div className="secondgrid">
          <div>
            <img src={Photo5} alt="" />
            <h1>Signature Suites</h1>
            <p>
              From breathtaking views to private jacuzzis, the signature suites
              will take you a world away.
            </p>
            <button type="button">Explore</button>
          </div>
          <div>
            <img src={Photo5} alt="" />
            <h1>Signature Suites</h1>
            <p>
              From breathtaking views to private jacuzzis, the signature suites
              will take you a world away.
            </p>
            <button type="button">Explore</button>
          </div>
          <div>
            <img src={Photo5} alt="" />
            <h1>Signature Suites</h1>
            <p>
              From breathtaking views to private jacuzzis, the signature suites
              will take you a world away.
            </p>
            <button type="button">Explore</button>
          </div>
          <div>
            <img src={Photo5} alt="" />
            <h1>Signature Suites</h1>
            <p>
              From breathtaking views to private jacuzzis, the signature suites
              will take you a world away.
            </p>
            <button type="button">Explore</button>
          </div>
        </div>
      </div>
      <div className="container6">
        <div className="flex6">
          <div>
            <h1>Room Offers</h1>
          </div>
          <div>
            <p className="lineborder"></p>
          </div>
          <div>
            <p>
              Discover extraordinary offers at Dubai’s favourite resort and get
              ready for unforgettable adventures and out-of-this-world
              experiences.
            </p>
          </div>
          <div>
            <button className="secondbutton" type="button">
              Know More
            </button>
          </div>
        </div>
      </div>
      <div className="thirdgrid">
        <div>
          <img src={Img10} alt="" />
          <h2>Stay 5, Pay 4 On Full Board</h2>
          <p>
            Enjoy full board dining, resort credit and many complimentary
            experiences as part of your stay at Dubai’s most iconic resort.
          </p>
          <div className="thirdflex">
            <button className="buttonthird1" type="button">
              Know more
            </button>
            <button className="buttonthird2" type="button">
              BOOK NOW
            </button>
          </div>
        </div>
        <div>
          <img src={Img10} alt="" />
          <h2>Stay 5, Pay 4 On Full Board</h2>
          <p>
            Enjoy full board dining, resort credit and many complimentary
            experiences as part of your stay at Dubai’s most iconic resort.
          </p>
          <div className="thirdflex">
            <button className="buttonthird1" type="button">
              Know more
            </button>
          </div>
        </div>
      </div>
      <div className="conatinersm">
        <div className="fourposition">
          <div>
            <img src={Banner} alt="" />
          </div>
          <div className="fourtext">
            <h2>Atlantis Unlocked Membership</h2>
            <p className="lineborder1"></p>
            <p>
              Sign up to Atlantis Unlocked and book direct to unlock exclusive
              members' benefits.
            </p>
            <button type="button">Register Now</button>
          </div>
        </div>
      </div>
      <div className="container6">
        <div className="flex6">
          <div>
            <h1>Extraordinary Dining</h1>
          </div>
          <div>
            <p className="lineborder"></p>
          </div>
          <div>
            <p>
              Atlantis, The Palm is a foodie’s paradise. Where else can you dine
              underwater, feast on dishes by Gordon Ramsay and taste cuisines
              from all over the world under one roof? Have a look at some of our
              top picks.gettable adventures and out-of-this-world experiences.
            </p>
          </div>
          <div>
            <button className="secondbutton" type="button">
              Know More
            </button>
          </div>
        </div>
      </div>
      <div className="conatinersm">
        <div className="fivegrid">
          <div>
            <img src={Img11} alt="" />
            <h2>En Fuego</h2>
            <p>
              At En Fuego, every day feels like a fiesta bursting with the
              vibrant spirit of Mexico! From sizzling flavours to electrifying
              entertainment, it’s an experience you won’t forget.
            </p>
            <div className="fiveflex">
              <button className="buttonfive1" type="button">
                Explore
              </button>
              <button className="buttonfive2" type="button">
                Reserve
              </button>
            </div>
          </div>
          <div>
            <img src={Img12} alt="" />
            <h2>En Fuego</h2>
            <p>
              At En Fuego, every day feels like a fiesta bursting with the
              vibrant spirit of Mexico! From sizzling flavours to electrifying
              entertainment, it’s an experience you won’t forget.
            </p>
            <div className="fiveflex">
              <button className="buttonfive1" type="button">
                Explore
              </button>
              <button className="buttonfive2" type="button">
                Reserve
              </button>
            </div>
          </div>
          <div>
            <img src={Img13} alt="" />
            <h2>En Fuego</h2>
            <p>
              At En Fuego, every day feels like a fiesta bursting with the
              vibrant spirit of Mexico! From sizzling flavours to electrifying
              entertainment, it’s an experience you won’t forget.
            </p>
            <div className="fiveflex">
              <button className="buttonfive1" type="button">
                Explore
              </button>
              <button className="buttonfive2" type="button">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container6">
        <div className="flex6">
          <div>
            <h1>Legendary Adventures At Aquaventure World</h1>
          </div>
          <div>
            <p className="lineborder"></p>
          </div>
          <div>
            <p>
              From pulse-racing slides to incredible marine-animal encounters,
              Aquaventure World offers plenty of legendary experiences to keep
              you entertained.
            </p>
          </div>
          <div>
            <button className="secondbutton" type="button">
              Know More
            </button>
          </div>
        </div>
      </div>
      <div className="conatinerml">
        <div className="sixgrid">
          <div>
            <img className="photo6" src={Photo6} alt="" />
          </div>
          <div>
            <img className="photo7" src={Photo7} alt="" />
          </div>
        </div>
      </div>
      <div className="container6">
        <div className="flex6">
          <div>
            <h1>The UAE’s Most Extraordinary Kids Club</h1>
          </div>
          <div>
            <p className="lineborder"></p>
          </div>
          <div>
            <p>
              Discover a world of fun, wonder, and adventure at the all-new
              Atlantis Explorers Club. Featuring 10 unique play spaces and
              immersive experiences, kids aged 4 – 12 can unleash their inner
              adventurers, perfect their culinary skills, and discover their
              creativity.{" "}
            </p>
          </div>
          <div>
            <button className="secondbutton" type="button">
              Know More
            </button>
          </div>
        </div>
      </div>
      <div className="conatinersm">
        <div className="sevengrid">
          <div>
            <img src={Img14} alt="" />
          </div>
          <div>
            <img src={Img15} alt="" />
          </div>
          <div>
            <img src={Img16} alt="" />
          </div>
        </div>
      </div>
    <div className="eightposition">
      <div>
        <img src={Banner1} alt=""/>
      </div>
      <div className="eigthtext">
       <h2>Be The First To Know</h2> 
       <p className="lineborder1"></p>
       <p>Sign up to receive email updates on our latest offers <br></br> and special promotions.</p>
      <button type="button">sign up</button>
      </div>
    </div>
  <div className="containerxl">
    <div className="ninegrid">
      <div>
        <img src={Banner2} alt=""/>
      </div>
      <div className="ninegridbox">
        <div className="nineflex">
          <div>
            <h2>4-Star Forbes Travel Award 2024</h2>
            <p className="lineborder2"></p>
            <p>We are thrilled to share that Atlantis, The Palm been honoured with the prestigious 4-Star Forbes Travel Award. This achievement is a testament to our commitment to providing exceptional service, iconic stays and extraordinary experiences for our guests.</p>
          </div>
        </div>
      </div>
    </div>
  </div>  

  <div className="footerback1">
   <div className="conatinersm">
    <div className="flexbox">
    <div className="footerflex1">
    <div>
      <img className="logo" src={Logo1} alt=""/>
    </div>
  </div>
    </div>
  
   </div> 
  </div> 
    
    
    
    
    </div>
  );
}
