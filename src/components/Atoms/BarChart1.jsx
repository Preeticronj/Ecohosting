import React from 'react'
import BarChart from 'react-bar-chart';

const data = [
    { text: '0', value: 0 },
    { text: '1', value: 52, color: "silver" },
    { text: '2', value: 4, color: 'silver' },
    { text: '3', value: 2, color: 'silver' },
    { text: '4', value: 3, color: 'silver' },
    { text: '5', value: 2, color: 'silver' },
    { text: '6', value: 2, color: 'silver' },
    { text: '7', value: 1, color: 'silver' },
    { text: '8', value: 5, color: 'silver' },
    { text: '9', value: 0 },
    { text: '10', value: 80 }

];
const margin = { top: 20, right: 20, bottom: 30, left: 40 };


class BarChart2 extends React.Component {
    constructor() {
        super()
        this.state = {
            width: 300
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
                <div style={{ width: '50%' }}>
                    <BarChart ylabel='Quantity'
                        width={this.state.width}
                        height={200}
                        margin={margin}
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
export default BarChart2;