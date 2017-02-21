import React from 'react'
import './ReviewList.css'
import Review from 'toolkit/Review/Review'

export default function ReviewList(props) {
  const comments = [
    {
      author: 'jamiedawsonyoung',
      rating: 8,
      date: '13 Apr 2016',
      content: 'Cassandra is a very good example of a workable, foundational, back-end infrastructure component that possesses plenty of utility and functionality for Linux admins and architects, but will be lost on those used to point-and-click interfaces.',
    },
  ]

  return (
    <div className='ReviewList'>
      <h2>Reviews</h2>
      {(() => comments.map((comment, i) => (
        <div key={i}>
          <Review
            author={props.author || comment.author}
            rating={props.rating || comment.rating}
            date={props.date || comment.date}
            content={props.content || comment.content}
          />
        </div>
      )))()}
    </div>
  )
}
