import './App.css';
import React, { useEffect, useState} from 'react';
import API from './api';
import {doctorMessageDetailUrl} from './CommonConstatnts/apiUrls';
import StaticContainer from './Containers/StaticContainer';
import DoctorDetails from './Containers/DoctorDetail';
import DisplayVideo from './Containers/DisplayVideo';
import {Container} from 'react-bootstrap';
import DisplayVideoMessage from './Containers/DisplayVideoMessage';
import {useNavigate }from 'react-router-dom';
import Footer from './footer';
import PreLoader from './loader';

function Content() {

    const navigate = useNavigate();

    const queryParams = new URLSearchParams(window.location.search)
    const Code = queryParams.get("data")

    const [contentdata, setContentData] = useState([
        {
            id:1,
            language:'Assamese',
            title:'Assamese',
            videoUrl:'https://www.youtube.com/embed/z4ffm3XQIZQ?si=N57Cta-ompO5Q59f',
            sequenceNumber :10
        },
        {
            id:2,
            language:'Bengali',
            title:'Bengali',
            videoUrl:'https://www.youtube.com/embed/2EL69EzmgpI?si=9bUTgdJnePKLv7mr',
            sequenceNumber:2
        },
        {
            id:3,
            language:'Hindi',
            title:'Hindi',
            videoUrl:'https://www.youtube.com/embed/okiclgL7zq8?si=Bx2Pz186z221uy61',
            sequenceNumber:1
        },
        {
            id:3,
            language:'Odia',
            title:'Odia',
            videoUrl:'https://www.youtube.com/embed/0ClCrSpTmSE?si=Tzl6fkvGKMM-ejGm',
            sequenceNumber:8
        },
        {
            id:3,
            language:'Tamil',
            title:'Tamil',
            videoUrl:'https://www.youtube.com/embed/QcUiLBte05w?si=JKZD4YcByH5vj-SI',
            sequenceNumber:4
        }  ,
        {
            id:3,
            language:'Telugu',
            title:'Telugu',
            videoUrl:'https://www.youtube.com/embed/xT1ay62WhFo?si=lEVtPSmMstW0ZimD',
            sequenceNumber:7
        },
        {
            id:3,
            language:'Gujarati',
            title:'Gujarati',
            videoUrl:'https://www.youtube.com/embed/m1D6tOiq42s?si=hEfD2ZTMbLqEwNCh',
            sequenceNumber:5
        }, {
            id:3,
            language:'Kannada',
            title:'Kannada',
            videoUrl:'https://www.youtube.com/embed/oEuYLHuwaaw?si=41wbU15tOpKqLRft',
            sequenceNumber:6
        },
        {
            id:3,
            language:'Malayalam',
            title:'Malayalam',
            videoUrl:'https://www.youtube.com/embed/_fyEgSmElnw?si=EMJ27zcZwZSXdZLR',
            sequenceNumber:9
        }, {
            id:3,
            language:'Marathi',
            title:'Marathi',
            videoUrl:'https://www.youtube.com/embed/IduTf1ER7_0?si=95YLpuRAVE4n2q-A',
            sequenceNumber:3
        }            
    ]);
    const[loaderHide,setLoaderHide]=useState(undefined)
    const[currentVideoPlay,setCurrentVideoPlay]=useState(0)

    const GetChartData = () => {
        API.post(doctorMessageDetailUrl+encodeURIComponent(Code))
            .then(res => {
                setLoaderHide(true);
                if (!res.data.isError) {
                    if (res.data.data) {
                        if(res.data.data.doctorDetails)
                        {
                            if(res.data.data.doctorDetails.length > 0)
                            {
                                // console.log(res.data.data)
                              //  setContentData(res.data.data);
                            }
                            // else
                            // navigate("/error404");
                        }
                        // else
                        // navigate("/error404");
                    }
                    // else
                    // navigate("/error404");
                }
                // else
                // navigate("/error404");

            }).catch(error => {
                setLoaderHide(true);
                console.log("error", error);
                //navigate("/error404");
            })
    }
const PlayCurrentVideo = (id) =>{
    setCurrentVideoPlay(id);
}
    useEffect(() => {
        GetChartData();
    }, []);
  return (
      <>
        {
            !loaderHide ? (<PreLoader />) 
                : (
                    <div className="Content">
                        <StaticContainer></StaticContainer>   

                        <Container>
                            {/* <div className='listblock'>
                                <DoctorDetails data = {contentdata}></DoctorDetails>
                            </div> */}
                            
                            <div className='listblock'>
                                {/* <h1 style={{ textAlien: "center"}}>Coming Soon...</h1> */}
                                {/* <DisplayVideoMessage 
                                data={contentdata} 
                                onPlayCurrentVideo={PlayCurrentVideo}
                                onCurrentVideoPlay={currentVideoPlay}
                                /> */}
                                <DisplayVideo 
                                data = {contentdata} 
                                onPlayCurrentVideo={PlayCurrentVideo}
                                onCurrentVideoPlay={currentVideoPlay} 
                                />
                            </div>
                        </Container>

                        <Footer /> 
                    </div>
                )
        }
    </>
  );
}

export default Content;
