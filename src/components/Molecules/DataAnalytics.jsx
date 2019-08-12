import React from 'react'
import PieChart1 from '../Atoms/PieChart'
import PieChart2 from '../Atoms/PieChart1'
import './Molecules.css'
import QuickSearch from '../Atoms/QuickSearch'
import BarChart1 from '../Atoms/BarChart'
import BarChart2 from '../Atoms/BarChart1'
import ScatterChart from '../Atoms/ScatterChart'
let clockImage = require('../Images/clock.jpg')
let systemTree = require('../Images/systemtree.png')
let Report = require('../Images/report.png')
let Catalog = require('../Images/catalog.jpg')

class DataAnalytics extends React.Component {
    constructor() {
        super()
        this.state = {
            ProductDeployment: [
                {
                    total: '0'
                }
            ],
            ProductUpdate: [
                {
                    successfulUpdate: '1',
                    failedUpdate: '182'
                }
            ],
            data: [
                { title: "No data", value: 20, color: "silver" },
                { title: "Data 2", value: 5, color: "yellow" },

            ],
             data1: [
                { title: "No data", value: 182, color: "Maroon" },
                { title: "Data 2", value: 2, color: "yellow" },
            
            ]
        }

    }
    render() {
        return (
            <div className="dasboard">
                <div className="dasboard-header">
                    <div style={{paddingLeft:'5px',paddingTop:'5px'}}>
                        <i class='fas fa-align-justify' style={{ fontSize: '17px' }}></i>
                    </div>
                    <div className="clock" >
                        <img src={clockImage} className="clock_img" ></img>
                        <span className="dashboard_element">Dashboard</span>
                    </div>
                    <div className="system_tree">
                        <img src={systemTree} className="system_img"></img>
                        <span className="dashboard_element">System Tree</span>
                    </div>

                    <div className="report">
                        <img src={Report} className="report_img"></img>
                        <span className="dashboard_element">Report and queries</span>
                    </div>
                    <div className="catalog">
                        <img src={Catalog} className="catalog_img"></img>
                        <span className="dashboard_element">Client Task catalog</span>
                    </div>
                    <div className="caret-down">
                        <i class='fas fa-caret-down' style={{ fontSize: '24px' }}></i>
                    </div>
                    <div className="vl">
                    </div>
                    <div className="logoff">
                        <span className="dashboard_element">Log off</span>
                    </div>
                    <div className="vl1">
                    </div>
                    <div className="ques-mark">
                        <i class='fas fa-question-circle' style={{ fontSize: '24px' }}></i>
                    </div>
                </div>
                <div>
                    <div className="reporting">
                        <span className="dashboard_element">Reporting</span>
                    </div>
                    <div className="dasboard-heading">
                        <div>
                            <span style={{ fontSize: '28px', color: '#00CED1' }}>Dashboards</span>
                        </div>
                        <div>
                            <input type="text4" placeholder="Product Deployment"  ></input>

                        </div>
                        <div className="icon">
                            <i class='fas fa-chevron-down' style={{ fontSize: '15px' }}></i>

                        </div>
                        <div>
                            <button class="btn"><i class='fas fa-caret-down'></i>Dasboard Actions</button>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <PieChart1 productdeployment={this.state.ProductDeployment}
                        data={this.state.data}
                    />
                    <PieChart2 ProductUpdate={this.state.ProductUpdate} 
                    data1={this.state.data1}/>
                    <QuickSearch />

                </div>
                <div style={{ display: 'flex' }}>
                 <BarChart1
                 productdeployment={this.state.ProductDeployment}
                 />
                 <BarChart2
                  productdeployment={this.state.ProductDeployment}
                 />
                 <ScatterChart/>
                </div>
            </div>
        )
    }
}
export default DataAnalytics;