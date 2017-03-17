import React from 'react'
import css from './SnapPageDetails.css'

export default function SnapPageDetails(props) {
  return (
    <div>
      <ul className={css.list}>
        {props.items.map((item, i) => (
          <li key={i} className={css.item}>
            <div>{item[0]}</div>
            <div>{item[1]}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
