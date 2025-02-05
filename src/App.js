import './App.css';
import Content from './Content';
import Error404 from './ErrorPage';
import {Routes,Route,Navigate } from 'react-router-dom';
import {isMobile} from 'react-device-detect';


function App({initAnalytics}) {
  
  function  renderContent () {
      // if (isMobile) {
        return (
                  <div className="App">
                      <Routes>
                          <Route  path='/' element={<Content />}></Route>
                          <Route  path='/error404' element={<Error404 data={"Oops, Data not found!"} />}></Route>
                          <Route  path='*' element={<Error404 data={"Oops, Data not found!"}/>}></Route>
                      </Routes>
                  </div>
                )
      // }
      // return (
      //           <div className="App">
      //             <Routes>
      //             {/* <Route  path='/' element={<Content />}></Route> */}
      //                 <Route  path='/' element={<Navigate to="/error404" replace />} ></Route>
      //                 <Route  path='/error404' element={<Error404 data={"Oops, This content is unavailable on Desktop!"} />}></Route>
      //             </Routes>
      //           </div>
      //         )
    }
   initAnalytics();
   return renderContent();
}

export default App;
