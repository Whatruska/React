import {connect} from "react-redux";
import Dialog from "./Dialog";
import {addMsgActionCreator} from "../../../reducers/messageReducer";
import * as React from "react";
import Message from "./Message/Message";

class DialogContainer extends React.Component{
    renderMessages = () => this.props.messages.map((message) => {
        return(
            <Message author={message.author} text={message.text}/>
        );
    });

    addMessage = (data) =>{
        this.props.add(data.message, this.props.id);
    }

    render() {
        return(<Dialog renderedMessages={this.renderMessages()} addMsg={this.addMessage}/>);
    }
}

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

const ConnectedDialogContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(DialogContainer);

export default ConnectedDialogContainer;