import React from "react";
import "./header.scss";
import Arrow from "../assert/photo/arrow.png";
import Logo from "../assert/photo/logo.webp";
import Menu from "../assert/photo/main-menu.png";
export default function Header() {
  return (
    <div>
      <div className="headerback">
        <div className="headerflex1">
          <div className="headerflex">
            <div>
              <p>EN</p>
            </div>
            <div>
              <img src={Arrow} alt="" />
            </div>
          </div>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div></div>
        </div>
        <div className="headerflex2">
          <div>
            <p> Atlantis Dubai</p>
          </div>
          <div>
            <p> Atlantis Sanya</p>
          </div>
          <div>
            <p> Careers</p>
          </div>
        </div>
      </div>

      <div className="tabback">
        <div className="tabflex">
          <div className="img1">
            <img src={Menu} alt="" />
          </div>
          <div>
            <img className="logo" src={Logo} alt="" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
