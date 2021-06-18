import React from 'react'

import s from './Message.module.css';

function Message({message}) {
  return (
    <div className={s.message}>
      <p className={`${s.text}`}>{message}</p>
    </div>
  )
}

export default Message
