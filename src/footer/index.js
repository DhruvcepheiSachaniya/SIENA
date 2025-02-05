import React from "react";
import {Container, Row,Col,Dropdown,DropdownButton} from 'react-bootstrap';
import imgsmall from "../assets/images/pages/Crevast_600x74 pix.png";
import img from "../assets/images/pages/Crevast_1200x149 pix.png";


const Footer = () => (
  <div className="footer">
      <Container>
        {/* <div className="footerimg">
          <img src={img} />
        </div> */}
        <div className="footertext">
          <p className="da-badge-text da-mb-0 " style={{color:'#2E2E33'}}>
            ©{(new Date().getFullYear())} ERIS LIFESCIENCES LIMITED, All rights Reserved
          </p>
        </div>
    </Container>
  </div>
);

export default Footer;