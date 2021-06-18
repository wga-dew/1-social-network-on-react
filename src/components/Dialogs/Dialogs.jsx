import React from "react";

import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";



const Dialogs = ({state: {dialogData, messagesData}}) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogData.map((obj) => (
          <DialogItem key={obj.id} name={`${obj.name}`} id={obj.id} />
        ))}
      </div>
      <div className={s.messages}>
        {messagesData.map((obj) => (
          <Message key={obj.id} message={obj.message} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
