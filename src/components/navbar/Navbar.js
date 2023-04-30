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
              <a href="./styles">{this.props.secondTitle}</a>
              <a href="./social">{this.props.thirdTitle}</a>
              <a href ="./workscited">{this.props.fourthTitle}</a>
            </nav>


           </div>
             
          );
    }
   
}

export default Navbar;