import React from 'react'
import Chart from 'react-apexcharts'

class ApexPieChart extends React.Component{
    constructor(){
        super()

        this.state = {
            options: {
              chart: {
                id: 'apexchart-example'
              },
              xaxis: {
                categories: ['Korero', 'potpie','masai', 'unpawn', 'hybla', 'talc','hardly']
              }
            },
            series: [{
              name: 'series-1',
              data: [1.7, 4.5, 2,8 ,3,9]
            }]
          }
    }

    render(){
        return(
            <div className="pie-box2" >
              <div>
        <Chart options={this.state.options} 
        series={this.state.series} type="bar"
         width={270} height={320} />
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
        )
    }
}
export default ApexPieChart;