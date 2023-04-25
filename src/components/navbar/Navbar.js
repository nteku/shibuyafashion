import React from 'react';

class Navbar extends React.Component {

    constructor (props){
        super(props);
    }

    render () {
        return (
            <nav>
              <a href="./Homepage.js">{this.props.title}</a>
              <a href="./Homepage.js">{this.props.secondTitle}</a>
              <a href="./Homepage.js">{this.props.thirdTitle}</a>
            </nav>
          );
    }
   
}

export default Navbar;