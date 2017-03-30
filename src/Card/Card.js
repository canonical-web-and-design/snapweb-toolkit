import React, { PureComponent } from 'react'
import css from './Card.css'

import classes from 'toolkit/classes'
import If from 'toolkit/If'

import RatingStars from 'toolkit/RatingStars/RatingStars'
import ProgressBar from 'toolkit/ProgressBar/ProgressBar'

export function CardIcon({ image }) {
  return (
    <img
      className={css.icon}
      src={image}
      alt=''
      width='114'
      height='114'
    />
  )
}

export function CardName({ name }) {
  return (
    <p className={css.name}>{name}</p>
  )
}

export function CardAuthor({ name }) {
  return (
    <p className={css.author}>{name}</p>
  )
}

export const CARD_MAIN_ID = 'main';
export const CARD_ROOT_ID = 'card';

class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { installProgress: -1 };
  }

  onCardClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.onCardClick) {
      this.props.onCardClick(CARD_ROOT_ID, this.props, this)
    }
  }

  onMainClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.onCardClick) {
      this.props.onCardClick(CARD_ROOT_ID, this.props, this)
    }
  }

  onActionClick = (actionId, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.onActionClick) {
      this.props.onActionClick(actionId, this.props, this)
    }
  }

  render() {

    const {
      children,
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

    const installing = installProgress !== -1

    const mainClass = alignBottom? 'cardAlignBottom' : 'card'
    return (
      <div
        className={css[mainClass]}
        role='button'
        onClick={this.onCardClick}
      >
        <div
          className={css.main}
          onClick={this.onMainClick}
        >
          <CardIcon
            image={image}
          />
          {children || (
            <div className={css.content}>
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
          className={css[installing? 'footerInstalling' : 'footer']}
        >
          {installing && (
            <div className={css.footerInstallProgress}>
              <ProgressBar progress={installProgress} />
            </div>
          )}
          <div className={css.actionWrapper}>

            <If cond={action === 'open'}>
              <div
                className={css.action}
                onClick={this.onActionClick}
              >
                {action === 'open'?  'Open' : action}
              </div>

              <div className={css.action}>Configure</div>
            </If>

            <div
              className={css.action}
              onClick={this.onActionClick.bind(this, action)}
            >
             {action}
            </div>

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
