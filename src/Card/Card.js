import React, { PureComponent } from 'react'
require('./Card.css')

import classes from 'toolkit/classes'
import If from 'toolkit/If'

import RatingStars from 'toolkit/RatingStars/RatingStars'
import ProgressBar from 'toolkit/ProgressBar/ProgressBar'

export function CardIcon({ image }) {
  return (
    <img
      className='Card-icon'
      src={image}
      alt=''
      width='114'
      height='114'
    />
  )
}

export function CardName({ name }) {
  return (
    <p className='Card-name'>{name}</p>
  )
}

export function CardAuthor({ name }) {
  return (
    <p className='Card-author'>{name}</p>
  )
}

export const CARD_MAIN_ID = 'main';
export const CARD_ROOT_ID = 'card';

class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { installProgress: -1 };
  }

  onCardClick = () => {
    if (this.props.onCardClick) {
      this.props.onCardClick(CARD_ROOT_ID, this.props, this)
    }
  }

  onMainClick = () => {
//    if (this.props.onClick) {
//      this.props.onClick(CARD_MAIN_ID, this.props, this)
//    }
  }

  onActionClick = (actionId) => {
    if (this.props.onActionClick) {
      this.props.onActionClick(actionId, this.props, this)
    }
  }

  render() {

    const {
      children,
      positive,
      alignBottom,
      image,
      name,
      author,
      type,
      rating,
      action, // Kept for backwards compat
      actions,
    } = this.props

    var installProgress = this.state.installProgress;

    // slice to 2 actions for now
    if (actions && actions.length > 0) {
      actions = actions.slice(0:2)
    }
    const installing = installProgress !== -1

    return (
      <div
        className={classes({
          'Card': true,
          'Card-positive': positive,
          'Card-alignBottom': alignBottom,
        })}
        role='button'
        onClick={this.onCardClick}
      >
        <div
          className='Card-main'
          onClick={this.onMainClick}
        >
          <CardIcon
            image={image}
          />
          {children || (
            <div className='Card-content'>
              <div>
                <CardName
                  name={name}
                />
              </div>
              {author? (
                <div>
                  <CardAuthor
                    name={author}
                  />
                </div>
              ) : null}
              {type? (
                <div style={{ color: '#888888', fontWeight: '400' }}>{type}</div>
              ) : null}
              {rating? (
                <div>
                  <RatingStars />
                </div>
              ) : null}
            </div>
          )}
        </div>
        <div
          className={classes({
            'Card-footer': true,
            'Card-footer-installing': installing,
          })}
        >
          {installing && (
            <div className='Card-footer-installProgress'>
              <ProgressBar progress={installProgress} />
            </div>
          )}

          <div className='Card-action-wrapper'>  

            <If cond={action === 'open'}>
              <div
                className='Card-action'
                onClick={this.onActionClick.bind(this, "open")}
              >
                'Open'
              </div>
              <div
                className='Card-action'
              >
                {'Configure'}
              </div>
            </If>

            <If cond={action !== 'open' && actions.length > 0}>
            {actions.map((snap, i) => {
              <div
                className='Card-action'
                onClick={this.onActionClick.bind(this, actions[i].name ? actions[i].name : toString(i))}
              >
                actions[i].label
              </div>
              
            })}
            </If>

          </div>
      </div>
    </div>
    )
  }
}

Card.propTypes = {
  name: React.PropTypes.string,
  rating: React.PropTypes.number,
  author: React.PropTypes.string,
  image: React.PropTypes.string,
  actions: React.PropTypes.array,
  action: React.PropTypes.string,
  onCardClick: React.PropTypes.func,
  onActionClick: React.PropTypes.func,
}

Card.defaultProps = {
  onCardClick: () => {},
  actions: []
}

export default Card
