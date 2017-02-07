import React, { Component } from 'react'
import './Header.css'

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
            className='Header-nav-currentLine'
            style={currentLineStyles}
          />
        )}
        <div className='Header-activeOverlay' />
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
        className='Header'
        style={styles}
      >
        <div
          className='Header-underline'
          style={{ background: props.customColor || '#CDCDCD' }}
        />
        <div className='Header-in'>
          <If cond={props.logo}>
            <h1
              className='Header-logo'
              role='button'
              tabIndex='0'
              onClick={this.handleLogoClick}
            >
              <img
                src={props.logo}
                alt={props.name}
                height='48'
              />
              <div className='Header-activeOverlay' />
            </h1>
          </If>
          <If cond={props.menuitems.length > 0}>
            <nav className='Header-nav'>
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
            className='Header-profile'
            role='button'
            tabIndex='0'
            onClick={this.handleProfileClick}
          >
            <img width='24' height='24' src={avatar} alt='' />
            <span>{props.profilename || defaultProfileName}</span>
            <div className='Header-activeOverlay' />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
