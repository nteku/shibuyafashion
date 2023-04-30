import React  from "react";
import "./SecondHeader.css";

class SecondHeader extends React.Component {

    constructor (props){
        super(props);
    }

    render () {
        return (
            <>
                <h2>{this.props.title}</h2>
            </>
        );
    }
}

export default SecondHeader;