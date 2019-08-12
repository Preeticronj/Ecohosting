import React from 'react'
import './atom.css'

import PieChart from 'react-minimal-pie-chart';
// const data = [
//     { title: "No data", value: 182, color: "Maroon" },
//     { title: "Data 2", value: 2, color: "yellow" },

// ]

class Piechart2 extends React.Component {
    constructor() {
        super()
    }

    render() {
        console.log('productdeployment---->', this.props.data1)
        return (
            <div className="pie-box">
                <div className="box-header">
                    <div className="arrow">
                        <i class='fas fa-caret-down'></i>
                    </div>
                    <div className="vl3">
                    </div>
                    <div className="left-box">
                        <p style={{ marginTop: '4px' }}>Product Updates in  last24 hours</p>
                    </div>
                </div>
                <div className="piechart">
                    <div style={{ height: '17%', width: '46%' }}>
                        <PieChart
                            data={this.props.data1}
                            lengthAngle={360}
                            cx={50}
                            cy={50}
                            startAngle={0}
                            // paddingAngle={1}
                            lineWidth={100}
                            //   totalValue={2}
                            viewBox={35}
                        />
                    </div>
                    <div className="vl4">
                        <table id="customers1">
                            <tr>
                                <th></th>
                                <th>Number of Client...</th>
                            </tr>
                            {/* <tr> */}
                          
                                {this.props.data1.map((item, index) => {
                                    return (
                                        <tr>

                                        <tr>
                                        {/* <td>successfulUpdate</td> */}
                                     <td>{item.value}</td>

                                   
                                     </tr>
                                     {/* <tr>
                                     <td>failedUpdate</td>
                                      <td>{item.value}</td>
                                      </tr> */}
                                     
                                      </tr>
                                       
                                    )
                                })
                                }
                            

                        </table>
                    </div>

                </div>

            </div>
        )
    }

}
export default Piechart2;