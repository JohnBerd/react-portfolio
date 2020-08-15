import { withController } from 'react-scroll-parallax';
import React, {Component} from 'react'

class Image extends Component {
    handleLoad = () => {
        this.props.parallaxController.update();
    };

    render() {
        return <img src={this.props.src} onLoad={this.handleLoad} className={this.props.className} />;
    }
}

export default withController(Image);