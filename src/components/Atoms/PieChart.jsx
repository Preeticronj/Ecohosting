import React from 'react'
import './atom.css'

import PieChart from 'react-minimal-pie-chart';
// const data = [
//     { title: "No data", value: 20, color: "silver" },
//     { title: "Data 2", value: 5, color: "yellow" },

// ]

class Piechart1 extends React.Component {
    constructor() {
        super()
    }

    render() {
        console.log("data",this.props.data)
        console.log('productdeployment---->', this.props.productdeployment)
        return (
            <div className="pie-box">
                <div className="box-header">
                    <div className="arrow">
                        <i class='fas fa-caret-down'></i>
                    </div>
                    <div className="vl3">
                    </div>
                    <div className="left-box">
                        <p style={{ marginTop: '4px' }}>Product deployment in 24 hours</p>
                    </div>
                </div>
                <div className="piechart">
                    <div style={{ height: '17%', width: '46%' }}>
                        <PieChart
                            data={this.props.data}
                            lengthAngle={360}
                            cx={50}
                            cy={50}
                            //   totalValue={2}
                            viewBox={35}
                        />
                    </div>
                    <div className="vl4">
                        <table id="customers">
                            <tr>
                                <th></th>
                                <th>Number of Client...</th>
                            </tr>
                            {/* <tr> */}
                          
                                {this.props.productdeployment.map((item, index) => {
                                    return <tr>
                                     <td>Total</td>
                                      <td>{item.total}</td>
                                    </tr>
                                })
                                }
                            

                        </table>
                    </div>

                </div>

            </div>
        )
    }

}
export default Piechart1;

