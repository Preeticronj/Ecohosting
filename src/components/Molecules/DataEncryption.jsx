import React from 'react'
import DataEncrypt from '../Atoms/DataEncrypt'
import './Molecules.css'
let BrainImage = require('../Images/brainimage1.jpg')
let SearchImage = require('../Images/searchimage.jpg')
let SettingImage = require('../Images/setting.png')
let ExploreImage = require('../Images/explore.png')

class DataEncryption extends React.Component {
  constructor() {
    super()
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
        <div style={{ display: 'flex', marginLeft: '-135px' }}>
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
        </div>
      </div>
    )
  }
}
export default DataEncryption;