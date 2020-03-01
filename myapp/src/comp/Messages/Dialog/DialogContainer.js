import {connect} from "react-redux";
import Dialog from "./Dialog";
import {addMsgActionCreator} from "../../../reducers/messageReducer";

let mapStateToProps = (state) => {
    return({
        messages : state.messagesPage.messages,
    });
};

let mapDispatchToProps = (dispatch) => {
    return({
        add : (text, id) => {
            dispatch(addMsgActionCreator(text, id))
        }
    });
};

let mergeProps = (stateProps, dispatchProps, props) => {
    return({
        id : props.id,
        messages : getMsgsByID(stateProps.messages, props.id),
        add : dispatchProps.add
    });
};

let getMsgsByID = (messages, id) => {
    for (let i = 0; i < messages.length; i++){
        let d = messages[i];
        if (d.userId === id){
            return d.dialog;
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Dialog);

export default DialogContainer;