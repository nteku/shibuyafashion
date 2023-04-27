import React from 'react';
import './Navbar.css';
class Navbar extends React.Component {

    constructor (props){
        super(props);
    }

    render () {
        return (

           <div className = "navs">

              <nav>
              <a href="./history">{this.props.title}</a>
              <a href="./Homepage.js">{this.props.secondTitle}</a>
              <a href="./Homepage.js">{this.props.thirdTitle}</a>
            </nav>

            
           </div>
             
          );
    }
   
}

export default Navbar;