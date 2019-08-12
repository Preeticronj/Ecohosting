import React from 'react'
import ApexPieChart from '../Atoms/ApexPieChart'
import ApexPieChart1 from '../Atoms/ApexPieChart1'

class DataProtection extends React.Component{
    constructor(){
        super()

    }
    render(){
        return (
            <div className="apex-chart">
             <ApexPieChart/>
             <ApexPieChart1/>
            </div>
        )
    }
}
export default DataProtection;