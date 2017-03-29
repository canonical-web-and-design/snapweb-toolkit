import React from 'react'
import css from './Link.css'

import If from 'toolkit/If'
import Icon from 'toolkit/Icon/Icon'

import classes from 'toolkit/classes'

export default function Link({ color, label, external, onClick }) {
  const style = {}
  if (color) style.color = color
  return (
    <a
      role='button'
      onClick={onClick}
      className={css.link}
      style={style}
    >
      {label}
      <If cond={external}>
        <span className={css.externalIcon}>
          <Icon name='external' />
        </span>
      </If>
    </a>
  )
}
