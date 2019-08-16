import React from 'react'
import TopBar from '../components/TopBar'
import HeaderBar from '../components/HeaderBar'
import MenuBar from '../components/MenuBar'
import MainBody from '../components/MainBody'
import FooterBar from '../components/FooterBar'
import DataEncrypt from '../components/Atoms/DataEncrypt'
import DataEncryption from '../components/Molecules/DataEncryption'
import Service from '../components/Atoms/Service'
import DataAnalytics from '../components/Molecules/DataAnalytics'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FireWall from '../../src/components/Atoms/FireWall'
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
let natureImage = require("../components/Images/natureimages.jpg")


class MainContainer extends React.Component {
    constructor() {
        super()

    }

    render() {
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
        };



        return (
            <div className="carousel-container" >
                <Carousel
                 swipeable={true}
                  draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    // autoPlaySpeed={5000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div>
                        <TopBar />
                        <HeaderBar />
                        <MenuBar />
                        <MainBody />
                        <FooterBar />
                    </div>
                    <img src={natureImage} style={{ height: '1000px', width: '1349px' }}></img>
                </Carousel>

            </div>
        )
    }
}
export default MainContainer;
