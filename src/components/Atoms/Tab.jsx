// 
import React from 'react'
import Content1 from './content1'
import Content2 from './content2'

import CoolTabs from 'react-cool-tabs'

class Tab extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <CoolTabs
	       tabKey={'1'}
	       style={{ width:  540, height: 100, background:  'white' }}
	    //    activeTabStyle={{ background:  'red', color:  'white' }}
	    //    unActiveTabStyle={{ background:  'green', color:  'black' }}
	       activeLeftTabBorderBottomStyle={{ background:  'blue', height:  4}}
	       activeRightTabBorderBottomStyle={{ background:  'yellow', height:  4}}
	       tabsBorderBottomStyle={{ background:  'orange', height:  4 }}
	       leftContentStyle={{ background:  'silver' }}
	       rightContentStyle={{ background:  'lightblue' }}
	       leftTabTitle={'Simple'}
           rightTabTitle={'Preconfigured'}
        //    rightTabTitle={'Adavnced'}
	       leftContent={<Content1/>}
           rightContent={<Content2/>}
           
	       contentTransitionStyle={'transform 0.6s ease-in'}
	       borderTransitionStyle={'all 0.6s ease-in'}/>

            </div>
        )
    }
}
export default Tab;