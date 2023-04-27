import React from 'react';
import { Routes, Route,BrowserRouter} from 'react-router-dom';
import Homepage from './Homepage';
import History from './History';

 function App(props) {
return (
   
  <>
    
  <BrowserRouter>
     
      <Routes>
          <Route path = "/" element = {<Homepage />} />
          <Route path = "/history" element = {<History />} />
      </Routes>
 
  </BrowserRouter>
      
     
  </>
   
   
  );
} 

export default App;
