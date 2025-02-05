import '../CSS/Common.css';
import {Row,Col} from 'react-bootstrap';
import { useState } from 'react';
import { savedoctormsgplaycountUrl } from '../CommonConstatnts/apiUrls';
import API from '../api';

function DisplayVideoMessage(props){
    
    const[pausemessagevideo , setPausemessagevideo] =useState([]);

    function videoPlay(event, data) {
          
        let _dataExits = pausemessagevideo.filter(t => t.dvlcidid == data.dvlcidid);

       props.onPlayCurrentVideo(0);
        
        if(_dataExits.length == 0)
        {
            const Model = {
                DVLCIDID: data['dvlcidid'],
                DrCode: data['drCode'],
                }
            
                API.post(savedoctormsgplaycountUrl, Model)
                .then(res => {
                    // console.log("res", res)
                }).catch(error => {
                    // console.log("error", error)
                });
        }
    }
    function videoEnd(event, data) {
        setPausemessagevideo(pausemessagevideo.filter(item => item.dvlcidid !== data.dvlcidid));
        props.onPlayCurrentVideo(0);
    }
    function videoPause(event, data) {
        let _dataExits = pausemessagevideo.filter(t => t.dvlcidid == data.dvlcidid);
        if(_dataExits.length == 0)
        {
            setPausemessagevideo(arr  => [...arr, data]);
        }
        props.onPlayCurrentVideo(0);
    }

    return (
        <>
        <div className='titlesm'>Doctor Message</div> 
        <Row>
            {/* {props.data.doctorDetails != undefined &&
                  props.data.doctorDetails.map(item => { */}
                    {/* // if(item.displayName.toLowerCase().includes("doctor message") || item.displayName.toLowerCase().includes("video"))
                    // {   
                    //     return( */}
                                <Col lg={4} sm={6} xs={12} key={'http://d1gaa93sipi7h7.cloudfront.net/E10982_30D9CED0-6922-4582-A651-85CFB93CF06D.MOV'}>
                                    <div className='videobox'>
                                        <video 
                                            className={`displayvideoPlay`}
                                            controls
                                            controlsList="nodownload"
                                            key={'http://d1gaa93sipi7h7.cloudfront.net/E10982_30D9CED0-6922-4582-A651-85CFB93CF06D.MOV'} 
                                            // onPlay={(e) => videoPlay(e, item)}
                                            // onEnded = {(e) => videoEnd(e, item)}
                                            // onPause = {(e) => videoPause(e, item)}
                                        >
                                             <source src={'http://d1gaa93sipi7h7.cloudfront.net/E10982_30D9CED0-6922-4582-A651-85CFB93CF06D.MOV'} type="video/mp4" />
                                        </video>
                                        
                                    </div>
                                </Col>
                    {/* //     )
                    // }
                    // else{ */}
                    {/* //     return(<>
                           
                    //     </>)
                    // }
            //      })  
            // } */}
                  
        </Row>
        </>
    );
}

export default DisplayVideoMessage;