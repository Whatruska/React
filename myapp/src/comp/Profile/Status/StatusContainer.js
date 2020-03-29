import React from "react";
import {connect} from "react-redux";
import {statusThunkCreator} from "../../../reducers/profileReducer";
import {getUserByID} from "../../../data/users";
import Status from "./Status";

class StatusContainer extends React.Component {
    state = {
        editMode : false
    };

    activateEdit = () => {
        this.setState({
            editMode : true
        });
    };

    deactivateEdit = () => {
        this.setState({
            editMode : false
        });
    };

    componentDidMount() {
        this.props.getStatus(this.props.id);
    }

    updateStatus = (status) => {
        getUserByID(this.props.id).status = status;
    }

    render() {
        let status = this.props.status;
        if (this.props.id < 5){
            status = getUserByID(this.props.id).status;
        }
        return(<Status editMode={this.state.editMode} status={status} id={this.props.id} activateEdit={this.activateEdit} deactivateEdit={this.deactivateEdit} updateStatus={this.updateStatus}/>);
    }
}

let mapStateToProps = (state) => {
    return({
        status : state.profilePage.status
    });
};

let mapDispatchToProps = (dispatch) => {
    return ({
       getStatus : (userId) => {
           dispatch(statusThunkCreator(userId));
       },
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusContainer);