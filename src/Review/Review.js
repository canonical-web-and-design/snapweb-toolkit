import React from 'react'
import css from './Review.css'

import RatingStars from 'toolkit/RatingStars/RatingStars'
import defaultAvatar from './default-avatar.png'

export default function Review({
  author,
  image = defaultAvatar,
  rating,
  date,
  content,
}) {
  return (
    <div>
      <div className={css.rating}>
        <RatingStars color />
      </div>
      <div className={css.content}>
        <img
          className={css.image}
          src={image || ''}
          alt=''
          width='62'
          height='62'
        />
        <div>
          <div className={css.metas}>
            <div><strong>{author}</strong></div>
            <div className={css.date}>{date}</div>
          </div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  )
}

Review.PropTypes = {
  author: React.PropTypes.string,
  image: React.PropTypes.string,
  rating: React.PropTypes.number,
  date: React.PropTypes.string,
  content: React.PropTypes.string,
}
