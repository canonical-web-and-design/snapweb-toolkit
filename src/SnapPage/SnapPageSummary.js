import React from 'react'
import css from './SnapPageSummary.css'

import If from 'toolkit/If'
import RatingStars from 'toolkit/RatingStars/RatingStars'

export default function SnapPageSummary({
  icon,
  name,
  author,
  description,
  rating,
}) {
  return (
    <div className={css.main}>
      <img
        className={css.icon}
        src={icon}
        alt=''
        width='114'
        height='114'
      />
      <div>
        <h1 className={css.name}>{name}</h1>
        <If cond={author}>
          <p className={css.author}>{author}</p>
        </If>
        <If cond={rating >= 0}>
          <RatingStars />
        </If>
        <If cond={description}>
          <p className={css.description}>{description}</p>
        </If>
      </div>
    </div>

  )
}
