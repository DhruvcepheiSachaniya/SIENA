import '../App.css';
import '../CSS/Common.css'
import pic from '../assets/images/Logo/Heart care logo.png'
// import pic from '../HeartcareLogo.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import vonoprazan_header_logo from "./Vozan_logo.png"

function StaticContainer() {
      return (
            <div className='topheader' style={{ backgroundColor: "white" }}>
                  <Container>
                  <div className="logomain">
                  <div className='logobox'>
                        {/* <img src={vonoprazan_header_logo} />  */}
                  </div>
                  {/* change here */}
                  <div className='logotext'>Liver </div>
               </div>
                  </Container>
            </div>
      );
}

export default StaticContainer;
