import 'bootstrap/dist/css/bootstrap.css';
import { Row } from 'react-bootstrap';

function DoctorDetails(props) {
    // console.log(props)
    // console.log("props.doctorDetails",props.data.doctorDetails);

    return (
        <Row className='align-items-center row-cols-lg-5 row-cols-2 infolisting'>
            {props.data.doctorDetails != undefined &&
                props.data.doctorDetails.map(item => {

                    return (
                        <> <div className='infoimgbox'>
                            <div className="drimgbox">
                                <img src={item.image} />
                            </div>
                        </div>
                        <br/>
                            <div>
                                <div className='labelsm'>{item.displayName}</div>
                                <div className='listtxt'>{item.displayValue}</div>
                            </div>
                        </>
                    );


                    return (<>
                        <div>
                            <div className='labelsm'>{item.displayName}</div>
                            <div className='listtxt'>{item.displayValue}</div>
                        </div>
                    </>);

                })
            }
        </Row>
    );
}

export default DoctorDetails;

