import React from 'react'
import PieChart from '../Atoms/PieChart'
class DataAnalytics extends React.Component{
    constructor(){
        super()
        this.state={
          ProductDeployment:[
              {
               total:'0'   
              }
          ]  
        }  
        
    }
    render(){
        return(
            <div>
           <PieChart/> 
            </div>
        )
    }
}
export default DataAnalytics;