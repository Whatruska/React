import React, {useState} from "react";
import {connect} from "react-redux";
import {statusThunkCreator} from "../../../reducers/profileReducer";
import {getUserByID} from "../../../data/users";
import Status from "./Status";
import {getStatus} from "../../../selectors/profileSelector";

const StatusContainer = (props) => {
    let [editMode, setEditMode] = useState(false);

    let activateEdit = () => {
        setEditMode(true);
    };

    let deactivateEdit = () => {
        setEditMode(false);
    };

    let componentDidMount = () => {
        this.props.getStatus(this.props.id);
    }

    let updateStatus = (status) => {
        getUserByID(this.props.id).status = status;
    }

    let status = this.props.status;
    if (this.props.id < 5){
        status = getUserByID(this.props.id).status;
    }
    return(<Status editMode={editMode} status={status} id={props.id} activateEdit={activateEdit} deactivateEdit={deactivateEdit} updateStatus={updateStatus}/>);
}

let mapStateToProps = (state) => {
    return({
        status : getStatus(state)
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