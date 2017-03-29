import React, { Component } from 'react'
import css from './SnapPageLogin.css'

import Button from 'toolkit/Button/Button'

export default class SnapPageLogin extends Component {
  buttonClick = () => {
    const { status, onSignin, onAuthorize } = this.props
    if (status === 'wait-signin') {
      onSignin()
      return
    }
    if (status === 'wait-authorize') {
      onAuthorize()
      return
    }
  }
  render() {
    const { status, onCancel } = this.props

    const step = (() => {
      if (status === 'wait-signin' || status === 'signing-in') return 1
      if (status === 'wait-authorize' || status === 'authorizing') return 2
    })()

    const waiting = (
      status === 'signing-in' || status === 'authorizing'
    )

    const buttonLabel = (() => {
      if (status === 'wait-signin') return 'Sign in through Ubuntu One'
      if (status === 'signing-in') return 'Signing in…'
      if (status === 'wait-authorize') return 'Authorize payment'
      if (status === 'authorizing') return 'Authorizing…'
    })()

    const title = (() => {
      if (step === 1) return `
        Please log in using Ubuntu Single Sign On (Ubuntu One)
        to continue your purchase:
      `
      if (step === 2) return `
        Please authorize your payment (Card ending …3822)
      `
    })()

    const linkLabel = (() => {
      if (step === 1) return `
      I am a new Ubuntu One user
    `
      if (step === 2) return `
      I need to add my payment details
    `
    })()

    return (
      <div>

        <div className={css.header}>
          <h1 className={css.title}>
            {title}
          </h1>
          <div className={css.step}>
            <strong>Step {step}</strong> / 3
          </div>
        </div>

        <form autoComplete='off'>
          <div className={css.form}>
            <div className={css.field}>
              <label htmlFor='email'>Please type your email:</label>
              <input
                id='email'
                type='email'
                defaultValue='jamie.young@canonical.com'
                disabled={waiting}
              />
            </div>
            <div className={css.field}>
              <label htmlFor='password'>
                I am a returning user and my password is:
              </label>
              <input
                type='password'
                defaultValue='aaaaaaaaaa'
                disabled={waiting}
              />
            </div>
          </div>
        </form>

        <div className={css.footer}>
          <div className={css.link}>
            <a
              role='button'
              className='external'
            >
              {linkLabel}
            </a>
          </div>
          <div className={css.validateGroup}>
            <a
              role='button'
              className={css.validateGroupCancel}
              onClick={onCancel}
            >
              Cancel
            </a>
            <Button
              label={buttonLabel}
              type='strong'
              onClick={this.buttonClick}
              loading={waiting}
            />
          </div>
        </div>

      </div>
    )
  }
}
