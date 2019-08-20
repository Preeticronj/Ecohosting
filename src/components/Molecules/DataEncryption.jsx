import React from 'react'
import DataEncrypt from '../Atoms/DataEncrypt'
import DataEncrypt1 from '../Atoms/DataEncrypt1'
import './Molecules.css'
import ReactDOM from 'react-dom';
import ReactSwap from 'react-swap';
let BrainImage = require('../Images/brainimage1.jpg')
let SearchImage = require('../Images/searchimage.jpg')
let SettingImage = require('../Images/setting.png')
let ExploreImage = require('../Images/explore.png')

class DataEncryption extends React.Component {
  constructor() {
    super()

    this.state = {
      pos: 0,
      arr: [{
        image: BrainImage,
        heading: 'Business Issuse Understanding',
        content1: 'Business Objective',
        content2: 'information Needed',
        content3: 'Types of Analysis',
        content4: 'Scope of Work',
        content5: 'Deliverables',


      }, {

        image: SearchImage,
        heading: 'Data Understanding',
        content1: ' Initial Data Collection',
        content2: 'Data Requirement',
        content3: 'Types of Analysis',
        content4: 'Data Availability',
        content5: 'Data exploration and characteristics'


      },
      {
        image: SettingImage,
        heading: 'Data Preparation',
        content1: 'cleanse',
        content2: 'Format',
        content3: 'Blend',
        content4: 'Sample',
        content5: 'Gather Data From Multiple Sources'
      },
      {
        image: ExploreImage,
        heading: 'Exploratory Analysis/Modeling',
        content1: 'Develop Methodology',
        content2: 'Determine Important Variables',
        content3: 'Builld Model',
        content4: 'Asses Model'

      }
      ]
    }
  }



  render() {
    return (
      <div>
        <p style={{
          textAlign: 'center',
          fontSize: '27px',
          color: 'grey'
        }}>
          Life cycle of a DataAnalysis project based on </p>
        <p style={{
          textAlign: 'center',
          fontSize: '27px',
          color: 'grey'
        }}>CRISP-DM methodology</p>
        {/* <div style={{ display: 'flex', marginLeft: '-135px' }}>
       
          <DataEncrypt
            borderBox='Business Issue Understanding'
            text1='Business Objective'
            text2='information Needed'
            text3='Types of Analysis'
            text4='Scope of Work'
            text5='Deliverables'
            img={BrainImage}
          
          />
          <DataEncrypt
            borderBox='Data Understanding'
            text1='Initial Data Collection'
            text2='Data Requirement'
            text3='Types of Analysis'
            text4='Data Availability'
            text5='Data exploration and characteristics'
            style={{ backgroundColor: 'grey' }}
            style1={{ border: '2px solid grey' }}
            img={SearchImage}
           
          />
        
          <DataEncrypt
            borderBox='Data Preparartion'
            text1='cleanse'
            text2='Format'
            text3='Blend'
            text4='Sample'
            text5='Gather Data From Multiple Sources'
            style={{ backgroundColor: 'orange' }}
            style1={{ border: '2px solid orange' }}
            img={SettingImage}

          />

          <DataEncrypt
            borderBox='Exploratory Analysis/Modeling'
            text1='Develop Methodology'
            text2='Determine Important Variables'
            text3='Builld Model'
            text4='Asses Model'
            style={{ backgroundColor: 'deepskyblue' }}
            style1={{ border: '2px solid deepskyblue' }}
            img={ExploreImage}

          />
        
        </div> */}
        <DataEncrypt1 arr={this.state.arr} />
      </div>
    )
  }
}
export default DataEncryption;