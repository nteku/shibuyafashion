import React from 'react';
import { Routes, Route,BrowserRouter} from 'react-router-dom';
import Homepage from './homepage/Homepage';
import Styles from './styles/Styles';
import History from './history/History';
import SocialDynamics from './socialdynamics/SocialDynamics';
import WorksCited from './workscited/WorksCited';


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
