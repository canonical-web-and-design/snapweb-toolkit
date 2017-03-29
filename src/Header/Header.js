import React, { Component } from 'react'
import css from './Header.css'

import If from 'toolkit/If'

import avatar from './assets/avatar.png'

// item icons
import iconHome from './assets/home.svg'
import iconStore from './assets/store.svg'
import iconSettings from './assets/settings.svg'

const defaultProfileName = 'Lola Chang'

const itemIcons = {
  home: iconHome,
  store: iconStore,
  settings: iconSettings,
}

class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick(event) {
    event.currentTarget.blur()
    this.props.onClick(this.props.id)
  }
  render() {
    const { name, id, current, currentColor } = this.props
    const currentLineStyles = {}
    if (currentColor) {
      currentLineStyles.background = currentColor
    }
    return (
      <li
        role='button'
        tabIndex='0'
        onClick={this.onClick}
        className={current? 'current' : ''}
      >
        {itemIcons[id]? (
          <img
            src={itemIcons[id]}
            alt=''
          />
        ) : null}
        <span>{name}</span>
        {current && (
          <div
            className={css.navCurrentLine}
            style={currentLineStyles}
          />
        )}
        <div className={css.activeOverlay} />
      </li>
    )
  }
}

class Header extends Component {
  handleLogoClick = (event) => {
    if (this.props.onLogoClick) {
      event.currentTarget.blur()
      this.props.onLogoClick()
    }
  }
  handleProfileClick = (event) => {
    if (this.props.onProfileClick) {
      event.currentTarget.blur()
      this.props.onProfileClick()
    }
  }
  handleMenuItemClick = (id) => {
    this.props.onMenuItemClick(id)
  }
  render() {
    const { props } = this
    const styles = props.customColor? {
      borderColor: props.customColor,
    } : {}
    return (
      <header
        className={css.main}
        style={styles}
      >
        <div
          className={css.underline}
          style={{ background: props.customColor || '#CDCDCD' }}
        />
        <div className={css.content}>
          <If cond={props.logo}>
            <h1
              className={css.logo}
              role='button'
              tabIndex='0'
              onClick={this.handleLogoClick}
            >
              <img
                src={props.logo}
                alt={props.name}
                height='48'
              />
              <div className={css.activeOverlay} />
            </h1>
          </If>
          <If cond={props.menuitems.length > 0}>
            <nav className={css.nav}>
              <ul>
                {(props.menuitems || []).map(item => (
                  <MenuItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    onClick={this.handleMenuItemClick}
                    current={item.id === props.currentSection}
                    currentColor={props.customColor}
                  />
                ))}
              </ul>
            </nav>
          </If>
          <div
            className={css.profile}
            role='button'
            tabIndex='0'
            onClick={this.handleProfileClick}
          >
            <img width='24' height='24' src={avatar} alt='' />
            <span>{props.profilename || defaultProfileName}</span>
            <div className={css.activeOverlay} />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
