import React from 'react'
import BarChart from 'react-bar-chart';
const data = [
    { text: '1', value: 150, color: "silver" },
    { text: '2', value: 50, color: 'silver' },
    { text: '3', value: 100, color: 'silver' },
    { text: '4', value: 25, color: 'silver' }

];
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const color = "silver"


class BarChart1 extends React.Component {
    constructor() {
        super()
        this.state = {
            width: 200
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
                        <p style={{ marginTop: '4px' }}>Product deployment in 24 hours</p>
                    </div>
                </div>
                <div style={{ width: '70%' }}>
                    <BarChart ylabel='Quantity'
                        width={this.state.width}
                        height={200}
                        margin={margin}
                        color={color}
                        data={data}
                        onBarClick={this.handleBarClick} />
                </div>
                <table id="customers">
                    <tr>
                        <th>Event generated time</th>
                        <th>Number of Client generated</th>
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

        )
    }
}
export default BarChart1;