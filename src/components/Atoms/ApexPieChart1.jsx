import React from 'react'

import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts'


class ApexPieChart1 extends React.Component{
    constructor(){
        super()
        
    
    this.state = {
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: false,
            // offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#fff']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['black']
          },

          xaxis: {
            categories: ['heme','tebu'],
          }
        },
        series: [{
          data: [4, 7, ]
        }, {
          data: [5, 3, ]
        },
        {
            data:[9,6,]
        }
    ],
      }
    } 

    render() {
      return (
        
         <div className="pie-box3">
        <div style={{height:'337px',width:'270px',paddingLeft:'25px'}} >
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="350" />
        </div>
        <div className="border-box1">
           <h3>Structure Understanding</h3>
           <p>how many bars are compared?</p>
           <p>Are the bars horizontal?</p>
            </div>
            <div className="border-box2">
            <h3>Data Retrieval</h3>
            <p>which bar is highest?</p>
            <p>what is value of third bar?</p>
            </div>
            <div className="border-box3">
                <h3>Reasoning</h3>
                <p>How many bar have value greater than 6?</p>
                <p>is the value of third bar is greater than second bar?</p>

            </div>
        </div>


      );
    }
  }

export default ApexPieChart1;