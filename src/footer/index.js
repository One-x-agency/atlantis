import React from "react";
import "./footer.scss";
import Logo from "../assert/photo/logo.webp";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footerflex">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="footerflex1">
            <div>
              <p>Atlantis Resorts</p>
              <p>Atlantis Dubai</p>
              <p>Atlantis Sanya</p>
            </div>
            <div className="p1">
              <p>Terms & Conditions</p>
              <p>Privacy Policy </p>
              <p>Website Terms Of Use</p>
            </div>
            <div className="p1">
              <p>Kerzner</p>
              <p>Kerzner International</p>
              <p>One&Only</p>
              <p>Rare Finds</p>
              <p>Siro</p>
              <p>Careers</p>
            </div>
          </div>
        </div>
        <div className="footerlast">
          <p>2025 © Kerzner International Limited. All Rights Reserved.</p>
        </div>
      </div>

      <div className="lastfooter">
        <div className="lastflex">
          <div>
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="firstbox">Atlantis Resorts</div>
        <div className="firstbox">Terms & Conditions</div>
        <div className="firstbox">Kerzner</div>
        <div className="secbox">
          2025 © Kerzner International Limited. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
