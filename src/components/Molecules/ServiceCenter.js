import React from 'react'
import './Molecules.css'
import Service from '../Atoms/Service'
import * as html2canvas from 'html2canvas'
import * as jsPDF from 'jspdf'

let ChevroletImage=require("../Images/chevrolet.png")
let PontaicImage=require("../Images/pontaic.jpg")
let SaturnImage=require("../Images/saturn.png")

class ServiceCenter extends React.Component {
    constructor() {
        super()
        this.state={
           serviceBulletin:[
               {
             header: "Service Bulletin",
              FileInSection:"02-Steering",
              BulletinNo:"05-02-35-2007",
              Date:"December 2005",
           },
        ],

        Images:[
            {
                chev_img:{ChevroletImage},
                pontaic_img:{PontaicImage},
                saturn_img:{SaturnImage}
            }
        ],
        Information:[
            {
             subjects:"Informationon inadverent Turning of Key Cylinder ,Loss of Electrical system and No DTcs",
             Models1:"2005-2006 Chevrolet Cobalt",
             Models2:"2006 chevrolet HHR" ,
             Models3:"2005-2006 Pontalc Pursuit(Canada only)",
             Models4:"2006 Pontaic Solstice",
             Models5:"2006 Saturn Ion",
             para:"Bulletins focus on nonsafety-related defects that might affect a vehicle’s performance or longevity, such as parts that fail prematurely or don’t operate the way they’re meant to",
             para1:"Just because a bulletin mentions a potential problem with your model, that doesn't mean the issue necessarily will develop in your particular vehicle. Often a specific glitch shows up on only a specified portion of the production run, on vehicles driven in certain parts of the country, or under certain conditions."            
            }
        ],
        Footer:[
            {
        para:"Just because a bulletin mentions a potential problem with your model, that doesn't mean the issue necessarily will develop in your particular vehicle. Often a specific glitch shows up on only a specified portion of the production run, on vehicles driven in certain parts of the country, or under certain conditions."  
        }
    ]
        }
    }

    printDocument=()=> {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }

    render() {
        console.log("serviceBulletin--->",this.state.serviceBulletin)
        return (
            <div >
                {/* <TopBar />
                <HeaderBar />
                <MenuBar />
                <MainBody />
                <FooterBar /> */}
                 <div className="mb5">
        <button onClick={this.printDocument}>download</button>
      </div>
      <div id="divToPrint" className="mt4" >
                <Service service={this.state.serviceBulletin}
                information={this.state.Information}
                Images={this.state.Images}
                Footer={this.state.Footer}
                />
                
            </div>
            </div>
        )
    }
}
export default ServiceCenter;