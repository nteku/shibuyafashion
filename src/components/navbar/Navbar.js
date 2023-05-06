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
              <a href={this.props.first}>{this.props.title}</a>
              <a href={this.props.second}>{this.props.secondTitle}</a>
              <a href={this.props.third}>{this.props.thirdTitle}</a>
              <a href ={this.props.fourth}>{this.props.fourthTitle}</a>
            </nav>


           </div>
             
          );
    }
   
}

export default Navbar;