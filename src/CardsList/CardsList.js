import React, { Component } from 'react'
import css from './CardsList.css'

import Card from 'toolkit/Card/Card'
import classes from 'toolkit/classes'

class CardWrapper extends Component {

  onClick = () => {
    this.props.onClick(this.props.card.id)
  }

  render() {
    const { card, image } = this.props

    const {
      name,
      author,
      action,
      rating,
      id,
      type,
      installProgress = -1,
    } = card

    const finalAction = (
      type? action : (
        installProgress > -1 ? '' : (action || 'open')
      )
    )

    return (
      <Card
        name={name}
        author={author}
        action={finalAction}
        type={type}
        image={image}
        onClick={this.onClick}
        rating={rating}
        positive={id === 'add'}
        alignBottom={id === 'add'}
        installProgress={installProgress}
      />
    )
  }
}

class CardsList extends Component {

  onCardClick = (id) => {
    this.props.onCardClick(id)
  }

  render() {

    const {
      children,
      title,
      cards,
      cardImgRootUrl,
      separator,
      header,
    } = this.props

    const headerClass = header? css.headerCustom : css.header

    const items = children || cards.map((card, i) => (
      <CardWrapper
        key={card.id + i}
        card={card}
        image={card.iconUrl || `${cardImgRootUrl}${card.image}.png`}
        onClick={this.onCardClick}
      />
    ))

    return (
      <section className={css.main}>
        <div className={headerClass}>
          {header || (
            <h1 className={css.title}>
              {title}
              {separator? (
                <div className={css.separator} />
              ) : null}
            </h1>
          )}
        </div>
        <div className={css.content}>
          {items.map((item, i) => (
            <div key={i} className={css.cardWrapper}>
              {item}
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default CardsList
