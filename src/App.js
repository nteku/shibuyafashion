import React from 'react';
import { Routes, Route,BrowserRouter} from 'react-router-dom';
import Homepage from './Homepage';
import Styles from './Styles';
import History from './History';
import SocialDynamics from './SocialDynamics';
import WorksCited from './WorksCited';


 function App(props) {
return (
   
  <>
    
  <BrowserRouter>
     
      <Routes>
          <Route path = "/" element = {<Homepage />} />
          <Route path = "/history" element = {<History />} />
          <Route path = "/styles" element = {<Styles />} />
          <Route path = "/social" element = {<SocialDynamics/>}/>
          <Route path = "/workscited" element = {<WorksCited/>} />
      </Routes>
 
  </BrowserRouter>
      
     
  </>
   
   
  );
} 

export default App;
