import {connect} from "react-redux";
import Dialog from "./Dialog";
import {addMsgActionCreator} from "../../../reducers/messageReducer";
import * as React from "react";
import Message from "./Message/Message";
import {getMessages} from "../../../selectors/messageSelector";

const DialogContainer = (props) => {
    let renderMessages = () => props.messages.map((message) => {
        return(
            <Message author={message.author} text={message.text}/>
        );
    });

    let addMessage = (data) =>{
        props.add(data.message, props.id);
    }

    return(<Dialog renderedMessages={renderMessages()} addMsg={addMessage}/>);
}

let getMsgsByID = (messages, id) => {
    for (let i = 0; i < messages.length; i++){
        let d = messages[i];
        if (d.userId === id){
            return d.dialog;
        }
    }
}

let mapStateToProps = (state) => {
    return({
        messages : getMessages(state),
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

const ConnectedDialogContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(DialogContainer);

export default ConnectedDialogContainer;