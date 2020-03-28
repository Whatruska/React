import React from "react";
import {connect} from "react-redux";
import {statusThunkCreator} from "../../../reducers/profileReducer";
import {getUserByID} from "../../../data/users";
import classes from "./Status.module.css";

let link = React.createRef();

class Status extends React.Component {
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

    render() {
        let status = this.props.status;
        if (this.props.id < 5){
            status = getUserByID(this.props.id).status;
        }
        if (!this.state.editMode){
            return (
                <div onDoubleClick={this.activateEdit} className={classes.status}>
                    Status : {status}
                </div>
            );
        } else if (this.props.id < 5) {
            return (
                <input type={"text"} className={classes.input} ref={link} onBlur={() => {
                    getUserByID(this.props.id).status = link.current.value;
                    this.deactivateEdit();
                }
                }/>
            );
        } else {
            return (
                <div className={classes.status}>
                    Status : {status}
                </div>
            );
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Status);