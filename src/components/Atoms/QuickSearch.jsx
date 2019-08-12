import React from 'react'
class QuickSearch extends React.Component{
    constructor(){
       super() 
    }
    render(){
        return(
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
                    <div>
                    <input type="text5" ></input>  
                    </div>
                    <div className="btn-go">
                    <button className="">GO</button>
                    </div>
                    <div className="search-footer">
                      <p style={{paddingTop:'8px'}}>Use this text box to search systems by systemname,Description,IP address,Mac address,DNS address,Username,custom1,custom2,custom3,custom4</p>
                    </div>

            </div>
        )
    }
}
export default QuickSearch;
