import React from 'react'
import './Button.css'

import classes from 'toolkit/classes'

export default function Button({
  disabled,
  type,
  onClick,
  label,
  loading,
  variableWidth,
  children,
  style={},
}) {
  return (
    <button
      disabled={disabled}
      type='button'
      className={classes({
        'Button': true,
        'Button-positive': type === 'positive',
        'Button-strong': type === 'strong',
        'Button-variable': variableWidth,
      })}
      onClick={onClick}
      style={style}
    >
      <span>
        {loading
          ? <span className='Button-spinner' />
          : null
        }
        {children || (<span>{label}</span>)}
      </span>
    </button>
  )
}
