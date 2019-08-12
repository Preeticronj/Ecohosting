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
//import '../../src/components/main.css'
//import Tab2 from './Tab2
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
let natureImage = require("../components/Images/natureimages.jpg")


class MainContainer extends React.Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div >
                {/* <Carousel dynamicHeight={false}
                    showArrows={true}
                    showThumbs={false}
                    showIndicators={true}
                    stopOnHover={true}
                    swipeable={true}
                    showStatus={true}
                    showIndicators={true}
                > */}
                    <div>
                        <TopBar />
                        <HeaderBar />
                        <MenuBar />
                        <MainBody />
                        <FooterBar />
                    </div>

                    {/* <img src={natureImage} style={{ height: '800px', width: '800px' }}></img>
                </Carousel> */}

            </div>
        )
    }
}
export default MainContainer;