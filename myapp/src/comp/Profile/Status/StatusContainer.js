import React, {useEffect, useState} from "react";
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

    let refresh = () => {
        props.getStatus(props.id);
    }

    useEffect(() => {
        refresh();
    },[]);

    let updateStatus = (status) => {
        getUserByID(props.id).status = status;
    }

    let status = props.status;
    if (props.id < 5){
        status = getUserByID(props.id).status;
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