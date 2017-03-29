import React from 'react'
import css from './Button.css'

export default function Button({
  disabled,
  type,
  onClick,
  label,
  loading,
  children,
  style={},
}) {
  let btnClass = 'button'
  if (type === 'positive') btnClass = 'buttonPositive'
  if (type === 'strong') btnClass = 'buttonStrong'
  return (
    <button
      className={css[btnClass]}
      disabled={disabled}
      type='button'
      onClick={onClick}
      style={style}
    >
      <span>
        {loading
          ? <span className={css.spinner} />
          : null
        }
        {children || (<span>{label}</span>)}
      </span>
    </button>
  )
}
