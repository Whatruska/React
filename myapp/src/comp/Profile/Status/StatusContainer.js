import React from "react";
import {connect} from "react-redux";
import Status from "./Status";
import {setStatusActionCreator, statusThunkCreator} from "../../../reducers/profileReducer";

class StatusContainer extends React.Component {
    componentDidMount() {
        this.props.getStatus(this.props.id);
    }

    render() {
        return <Status status={this.props.status} id={this.props.id} setStatus={this.props.setStatus}/>;
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
       setStatus : (status) => {
           dispatch(setStatusActionCreator(status));
       }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusContainer);