import React from 'react'
import TopBar from '../components/TopBar'
import HeaderBar from '../components/HeaderBar'
import MenuBar from '../components/MenuBar'
import MainBody from '../components/MainBody'
import FooterBar from '../components/FooterBar'
import Service from '../components/Atoms/Service'
import DataAnalytics from '../components/Molecules/DataAnalytics'
let ChevroletImage=require("../components/Images/chevrolet.png")
let PontaicImage=require("../components/Images/pontaic.jpg")
let SaturnImage=require("../components/Images/saturn.png")

class MainContainer extends React.Component {
    constructor() {
        super()
    //     this.state={
    //        serviceBulletin:[
    //            {
    //          header: "Service Bulletin",
    //           FileInSection:"02-Steering",
    //           BulletinNo:"05-02-35-2007",
    //           Date:"December 2005",

    //        },
    //     ] ,

    //     Images:[
    //         {
    //             chev_img:{ChevroletImage},
    //             pontaic_img:{PontaicImage},
    //             saturn_img:{SaturnImage}

    //         }
    //     ],
    //     Information:[
    //         {
    //          subjects:"Informationon inadverent Turning of Key Cylinder ,Loss of Electrical system and No DTcs",
    //          Models1:"2005-2006 Chevrolet Cobalt",
    //          Models2:"2006 chevrolet HHR" ,
    //          Models3:"2005-2006 Pontalc Pursuit(Canada only)",
    //          Models4:"2006 Pontaic Solstice",
    //          Models5:"2006 Saturn Ion",
    //          para:"Bulletins focus on nonsafety-related defects that might affect a vehicle’s performance or longevity, such as parts that fail prematurely or don’t operate the way they’re meant to",
    //          para1:"Just because a bulletin mentions a potential problem with your model, that doesn't mean the issue necessarily will develop in your particular vehicle. Often a specific glitch shows up on only a specified portion of the production run, on vehicles driven in certain parts of the country, or under certain conditions."            
    //         }

    //     ],
    //     Footer:[
    //         {
    //     para:"Just because a bulletin mentions a potential problem with your model, that doesn't mean the issue necessarily will develop in your particular vehicle. Often a specific glitch shows up on only a specified portion of the production run, on vehicles driven in certain parts of the country, or under certain conditions."  
    //     }
    // ]

    //     }
    }
    render() {
        return (
            <div >
                <TopBar />
                <HeaderBar />
                <MenuBar />
                <MainBody />
                <FooterBar />
                {/* <DataAnalytics/> */}
                {/* <Service service={this.state.serviceBulletin}
                information={this.state.Information}
                Images={this.state.Images}
                Footer={this.state.Footer}
                /> */}
            </div>
        )
    }
}
export default MainContainer;