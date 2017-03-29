import React from 'react'
import css from './ContentWrapper.css'
import classes from 'toolkit/classes'

export default function ContentWrapper(props) {
  return (
    <div 
      className={classes({
        [css.background]: props.background,
        [css.bordered]: props.bordered,
      })}
      style={props.style}
    >
      <div className={css.content}>
        {props.children}
      </div>
    </div>
  )
}
