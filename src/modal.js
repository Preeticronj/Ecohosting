import React from 'react';
import Modal from 'react-awesome-modal';
import './style.css';
import { ModalForm } from './index';

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Modal 
                visible={this.props.visible}
                width="469"
                height="552"
                effect="fadeInUp" 
                backgroundColor="transparent"
                onClickAway={() => this.props.closeModal()}
                >
                <div className="signup_modal">
                    <ModalForm
                        signupErrors={this.props.signupErrors}
                        signup_active={this.props.signup_active} 
                        oncloseModal={this.props.oncloseModal}
                        allDropdowns={this.props.allDropdowns}
                        addUser={this.props.addUser}
                        is_edit={this.props.is_edit}
                        add_user = {this.props.add_user}
                        />
                    <a href="javascript:void(0);" onClick={() => this.props.closeModal()}></a>
                   
                </div>
            </Modal>
        );
    }
}


export default App