import React from 'react'
import css from './SnapPageAbout.css'

export default function SnapPageAbout(props) {
  return (
    <div>
      <h2 className={css.title}>About</h2>
      <p>{props.content}</p>
    </div>
  )
}
