import React from "react";
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

    render() {
        if (!this.state.editMode){
            return (
              <div onDoubleClick={this.activateEdit} className={classes.status}>
                  Status : {this.props.status}
              </div>
            );
        } else if (this.props.id === 1) {
            return (
                <input type={"text"} ref={link} onBlur={() => {
                    this.deactivateEdit();
                    this.props.setStatus(link.current.value);
                }
                }/>
            );
        } else {
            return (
                <div className={classes.status}>
                    Status : {this.props.status}
                </div>
            );
        }
    }
}

export default Status;