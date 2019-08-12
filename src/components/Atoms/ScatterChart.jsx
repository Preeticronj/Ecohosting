// import React from 'react'
// var CanvasJSReact = require('../../canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var Component = React.Component;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// export default class ScatterChart extends Component {
//     constructor(){
//         super()
//     }

//     render() {
//         const options = {
// 			theme: "dark2",
// 			animationEnabled: true,
// 			zoomEnabled: true,
// 			title:{
// 				text: "Ice Cream Sales vs Temperature"
// 			},
// 			axisX: {
// 				title:"Temperature (in °C)",
// 				suffix: "°C",
// 				crosshair: {
// 					enabled: true,
// 					snapToDataPoint: true
// 				}
// 			},
// 			axisY:{
// 				title: "Sales",
// 				includeZero: false,
// 				crosshair: {
// 					enabled: true,
// 					snapToDataPoint: true
// 				}
// 			},
// 			data: [{
// 				type: "scatter",
//                 markerSize: 15,
//                 dataPoints: [
// 					{ x: 14.2, y: 215},
// 					{ x: 12.9, y: 175},
// 					{ x: 16.4, y: 325},
//                     { x: 26.9, y: 635},
//                 ]
//             }]
// 		}
//         return (

//             <div className="pie-box1">
//                 <div className="box-header">
//                     <div className="arrow">
//                         <i class='fas fa-caret-down'></i>
//                     </div>
//                     <div className="vl3">
//                     </div>
//                     <div className="left-box">
//                         <p style={{ marginTop: '4px' }}>Product deployment in 24 hours</p>
//                     </div>
//                 </div>
//                 <div>
//                 <CanvasJSChart options = {options}
// 				/* onRef={ref => this.chart = ref} */
// 			/> 
//                 </div>
//                 </div>
//         )
// }
// }
// //export default ScatterChart;

import React from 'react'
import ReactApexChart from 'react-apexcharts'
class ScatterChart extends React.Component {
      
    constructor(props) {
      super(props);

      this.state = {
        options: {
          chart: {
            zoom: {
              enabled: true,
              type: 'xy',
            //   download: true,
            }
          },
          xaxis: {
              tickAmount: 10,
               labels: {
                  formatter: function(val) {
                       return parseFloat(val).toFixed(1)
            
                   }
               }
          },
          yaxis: {
            tickAmount: 7
          }
        },
        series: [{
          name: "SAMPLE A",
          data: [
            [16.4, 5.4],
            [21.7, 2],
            [25.4, 3],
            [19, 2],
            [10.9, 1],
            [13.6, 3.2],
            [10.9, 7.4],
            [10.9, 0],
            [10.9, 8.2],
            [16.4, 0],
            [16.4, 1.8],
            [13.6, 0.3],
            [13.6, 0],
            [29.9, 0],
            [27.1, 2.3],
            [16.4, 0],
            [13.6, 3.7],
            [10.9, 5.2],
            [16.4, 6.5],
            [10.9, 0],
            [24.5, 7.1],
            [10.9, 0],
            [8.1, 4.7],
            [19, 0],
            [21.7, 1.8],
            [27.1, 0],
            [24.5, 0],
            [27.1, 0],
            
            [29.9, 1.5],

            [27.1, 0.8],
            [22.1, 2]
          ]
        }, {
          name: "SAMPLE B",
          data: [
            [6.4, 13.4],
            [1.7, 11],
            [5.4, 8],
            [9, 17],
            [1.9, 4],
            [3.6, 12.2],
            [1.9, 14.4],
            [1.9, 9],
            [1.9, 13.2],
            [1.4, 7],
            [6.4, 8.8],
            [3.6, 4.3],
            [1.6, 10],
            [9.9, 2],
            [7.1, 15],
            [1.4, 0],
            [3.6, 13.7],
            [1.9, 15.2],
            [6.4, 16.5],
            [0.9, 10],
            [4.5, 17.1],
            [10.9, 10],
            [0.1, 14.7],
            [9, 10],
            [12.7, 11.8],
            [2.1, 10],
            [2.5, 10],
            [27.1, 10],
            [2.9, 11.5],
            [7.1, 10.8],
            [2.1, 12]
          ]
        },
          
        ],
      }
    }

    render() {
      return (
        
        <div className="pie-box1">
            <div className="box-header">
                     <div className="arrow">
                         <i class='fas fa-caret-down'></i>
                     </div>
                   <div className="vl3">
                    </div>
                    <div className="left-box">
                        <p style={{ marginTop: '4px' }}>Agent Uninstall attempted in last 7 years  </p>
                    </div>
                 </div>
        <div style={{width:'300px',height:'100px'}} >
          <ReactApexChart options={this.state.options} series={this.state.series} type="scatter" height="300" />
        </div>
        </div>


      );
    }
  }
  export default ScatterChart;

