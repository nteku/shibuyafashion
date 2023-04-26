import React from 'react';
import './ImageAppearance.css';
class ImageAppearance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false
    };
  }

  componentDidMount() {
    const img = new Image();
    img.src = 'https://www.tokiotours.com/wp-content/uploads/2013/10/Shibuya-night-tour.jpg'; // Replace with your image URL
    img.onload = () => {
      this.setState({ imageLoaded: true });
    };
  }

  render() {
    return (
      <div className = "image">
        {this.state.imageLoaded && (
          <img src="https://www.tokiotours.com/wp-content/uploads/2013/10/Shibuya-night-tour.jpg" alt="My Image" />
        )}
        
      </div>
    );
  }
}

export default ImageAppearance;