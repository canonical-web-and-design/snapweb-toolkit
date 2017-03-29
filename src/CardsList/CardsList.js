import React, { Component } from 'react'
import css from './CardsList.css'

import Card from 'toolkit/Card/Card'
import classes from 'toolkit/classes'

class CardWrapper extends Component {

  onCardClick = (id, props, self) => {
    if (this.props.onCardClick) {
      this.props.onCardClick(id, props, self)
    }
  }

  onActionClick = (id, props, self) => {
    if (this.props.onActionClick) {
      this.props.onActionClick(id, props, self)
    }
  }

  render() {
    const { card, image } = this.props

    const {
      name,
      author,
      action,
      actions,
      rating,
      id,
      type,
      installProgress = -1,
    } = card

    // TODO remove & hoist logic
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
        actions={actions}
        type={type}
        image={image}
        onCardClick={this.onCardClick}
        onActionClick={this.onActionClick}
        rating={rating}
        positive={id === 'add'}
        alignBottom={id === 'add'}
        installProgress={installProgress}
      />
    )
  }
}

class CardsList extends Component {

  onCardClick = (id, props, self) => {
    this.props.onCardClick(id, props, self)
  }

  onActionClick = (id, props, self) => {
    this.props.onActionClick(id, props, self)
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
        onCardClick={this.onCardClick}
        onActionClick={this.onActionClick}
      />
    ))

    return (
      <section className={css.main}>
        <div className={headerClass}>
          {header || (
            <h2 className={css.title}>
              {title}
              {separator? (
                <div className={css.separator} />
              ) : null}
            </h2>
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
