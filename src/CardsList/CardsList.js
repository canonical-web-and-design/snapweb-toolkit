import React, { Component } from 'react'
import './CardsList.css'

import Card from 'toolkit/Card/Card'
import classes from 'toolkit/classes'

class CardWrapper extends Component {

  onClick = (id) => {
    if (this.props.onClick) {
      this.props.onClick(id)
    }
  }

  onActionClick = (id) => {
    if (this.props.onActionClick) {
      this.props.onActionClick(id)
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
        onClick={this.onClick}
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

  onCardClick = (id) => {
    this.props.onCardClick(id)
  }

  onActionClick = (id) => {
    this.props.onActionClick(id)
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

    return (
      <section className='CardsList'>
        <div className={classes({
        'CardsList-title': true,
        'CardsList-title-header': header,
      })}
        >
          {header || (
            <h2>
              {title}
              {separator? (
                <div className='CardsList-separator' />
              ) : null}
            </h2>
          )}
        </div>

        <div className='CardsList-content'>
          {children || cards.map((card, i) => (
            <CardWrapper
              key={card.id + i}
              card={card}
              image={card.iconUrl || `${cardImgRootUrl}${card.image}.png`}
              onClick={this.onCardClick}
              onActionClick={this.onActionClick}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default CardsList
