import React, { Component } from 'react'
import css from './SnapPageInstallButton.css'

import If from 'toolkit/If'
import Button from 'toolkit/Button/Button'
import ProgressBar from 'toolkit/ProgressBar/ProgressBar'

const ProgressBarWrapper = ({ label, progress }) => (
  <div className={css.progress}>
    <div className={css.progressLabel}>
      {label}
    </div>
    <ProgressBar progress={progress} />
  </div>
)

const ButtonWrapper = ({
  label,
  disabled,
  buttonLabel,
  type,
  onClick,
  disabled2,
  buttonLabel2,
  type2,
  onClick2,
  disabled3,
  buttonLabel3,
  type3,
  onClick3,
}) => (
  <div>
    <div className={css.price}>
      {label === 'free' ? 'Free' : ( label? (
        <span>
          <span>Price: </span>
          <span style={{fontWeight: 400}}>{label}</span>
        </span>
      ) : null)}
    </div>

    <If cond={buttonLabel2}>
      <Button
        style={{
          marginRight: '10px'
        }}
        onClick={onClick2}
        label={buttonLabel2}
        type={type2}
        disabled={disabled2}
      />
    </If>

    <If cond={buttonLabel3}>
      <Button
        style={{
          marginRight: '10px'
        }}
        onClick={onClick3}
        label={buttonLabel3}
        type={type3}
        disabled={disabled3}
      />
    </If>

    <Button
      onClick={onClick}
      label={buttonLabel}
      type={type}
      disabled={disabled}
      style={{ minWidth: buttonLabel2? 0 : '220px' }}
    />
  </div>
)

class SnapPageInstallButton extends Component {

  handleButtonClick = () => {
    const { status, onRequestInstall, onRequestRemove } = this.props

    if (status === 'uninstalled' && onRequestInstall) {
      return onRequestInstall(this.props.snapId)
    }

    if (status === 'installed' && onRequestRemove) {
      return onRequestRemove(this.props.snapId)
    }
  }

  render() {

    const {
      priceLabel,
      snapName,
      status,
      installProgress = 0,
    } = this.props

    const processing = [
      'wait-signin',
      'signing-in',
      'wait-authorize',
      'authorizing',
      'wait-confirm',
      'confirming1',
      'confirming2',
    ].includes(status)

    const buttonLabel = (() => {
      if (status === 'installed') return 'Remove'
      if (priceLabel === 'free') return 'Install'
      if (processing) return 'Processing…'
      return `Buy ${snapName}`
    })()

    return (
      <div>
        {status === 'installing'? (
          <ProgressBarWrapper
            label={installProgress < 0.8? 'Downloading' : 'Installing'}
            progress={installProgress}
          />
        ) : (
          <ButtonWrapper
            label={status === 'uninstalled'? priceLabel : ''}
            buttonLabel={buttonLabel}
            type={status === 'uninstalled'? 'positive' : 'normal'}
            onClick={this.handleButtonClick}
            disabled={processing}

            buttonLabel2={status === 'installed'? 'Open' : ''}
            type2={'normal'}
            onClick2={() => {}}
            disabled2={false}

            buttonLabel3={status === 'installed'? 'Configure' : ''}
            type2={'normal'}
            onClick3={() => {}}
            disabled3={false}

          />
        )}
      </div>
    )
  }
}

export default SnapPageInstallButton
