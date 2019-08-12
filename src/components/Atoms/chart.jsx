import React from 'react'
import PieChart from 'react-minimal-pie-chart';
const data = [
        {title: "No data", value: 29, color: "red"},
        {title: "Data 2", value: 5, color: "yellow"},
       
      ]

class Chart extends React.Component{
    constructor(){
        super()

    }
    
    render(){
        alert("hello")
        return(
            <div style={{width:'17%' ,height:'17%'}}>
              <PieChart
              data={data}
              lengthAngle={360}
              cx={50}
              cy={50}
            //   totalValue={2}
              viewBox={35}
              />
            </div>
        )
    }
}

export default Chart;