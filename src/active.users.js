import React from 'react';
import './style.css';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

const CustomTableCell = withStyles(theme => ({
    head: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Lato, sans-serif',
        backgroundColor: '#3469af'
    },
    body: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Lato, sans-serif',
        backgroundColor: 'transparent',
        padding: 8,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
    },
    table: {
        minWidth: 100,
        fontFamily: 'Lato, sans-serif'
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    editUser = (userId) => {
        this.props.isEdit(userId);
    }

    forcedEntry = (user) => {
        confirmAlert({
            title: 'Forced entry',
            message: `You are going to be log in for ${user.first_name} ${user.last_name}'s account. please make sure to not harm their personal details. `,
            closeOnClickOutside: false,
            buttons: [{
                label: 'Okay',
                onClick: () => this.props.forcedEntry(user)
            }, {
                label: 'Cancel',
                onClick: () => { }
            }]
        });
    };

    deleteUser = (userId) => {
        confirmAlert({
            title: 'Delete User',
            message: 'Are you sure?',
            closeOnClickOutside: false,
            buttons: [{
                label: 'Yes',
                onClick: () => this.props.deleteUser(userId)
            }, {
                label: 'No',
                onClick: () => { }
            }]
        });
    };

    onApproveUser = (isApproved) => {
       this.props.onApproveUser(isApproved)
    }

    render() {
        return (
            <div>
                <h1>Active Users</h1>
                <input className="search_input" type="text" placeholder="Search User" name="search"></input>
                <div className="users_table">
                    <Table responsive>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>ACTION</CustomTableCell>
                                <CustomTableCell>APPROVE USER</CustomTableCell>
                                <CustomTableCell>LATEST LOGIN</CustomTableCell>
                                <CustomTableCell>LAST NAME</CustomTableCell>
                                <CustomTableCell>FIRST NAME</CustomTableCell>
                                <CustomTableCell>TITLE</CustomTableCell>
                                <CustomTableCell>EMAIL</CustomTableCell>
                                <CustomTableCell>MEDICAL ASSOCIATION</CustomTableCell>
                                <CustomTableCell>SPECIALTY</CustomTableCell>
                                <CustomTableCell>HOSPITAL</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {this.props.allUsers.map((user, index) =>
                                <TableRow key={index}>
                                    <CustomTableCell>
                                        <span><i class='fas fa-sign-in-alt' onClick={() => this.forcedEntry(user)}></i></span>&nbsp;&nbsp;
                                        <span><i class='far fa-edit' onClick={() => {this.editUser(user.id); this.props.getState();}}></i></span>&nbsp;&nbsp;
                                        <span><i class='fas fa-trash' onClick={() => this.deleteUser(user.id)}></i></span>&nbsp;
                                    </CustomTableCell>
                                    <CustomTableCell><div className="checkbox"><i class="material-icons" style={user.is_active ? {color: "#16bbc7"} : {color:"transparent"}} onClick={() => this.onApproveUser(user)}>check</i></div></CustomTableCell>
                                    <CustomTableCell>{new Date(user.last_login).toLocaleDateString()}</CustomTableCell>
                                    <CustomTableCell>{user.last_name}</CustomTableCell>
                                    <CustomTableCell>{user.first_name}</CustomTableCell>
                                    <CustomTableCell>{user.title}</CustomTableCell>
                                    <CustomTableCell>{user.email}</CustomTableCell>
                                    <CustomTableCell>{user.medical_association_foundation}</CustomTableCell>
                                    <CustomTableCell>{user.speciality}</CustomTableCell>
                                    <CustomTableCell>{user.hospital}</CustomTableCell>
                                </TableRow>)
                            }

                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(App);