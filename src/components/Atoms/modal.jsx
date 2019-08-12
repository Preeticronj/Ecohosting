import React from 'react'
import Modal from 'react-modal';
import FireWall from './FireWall'


const customStyles = {
  content : {
    top                   : '63%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       :  'black',
  
  }
};


class fireWallModal extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        modalIsOpen: false
      };
   
    }
   
//    handleCloseIcon=()=>{
//      this.props.closeModal()
//    }


openModal=() => {
    this.setState({modalIsOpen: true});
  }


  closeModal=()=> {
      alert("byee")
    this.setState({modalIsOpen: false});
  }
    render(){
        return(
      

         <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
      <FireWall
      closeModal={this.closeModal}
      />
        </Modal>
        )
    }
}
export default fireWallModal;