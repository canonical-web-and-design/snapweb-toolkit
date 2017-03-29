import React from 'react'
import css from './SnapPageInterfaces.css'

export default function SnapPageInterfaces(props) {
  return (
    <div className={css.main}>
      <h2 className={css.title}>Interfaces:</h2>
      <ul>
        {props.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
