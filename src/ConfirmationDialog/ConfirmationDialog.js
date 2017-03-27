import React from 'react';

import css from './ConfirmationDialog.scss';

export default class ConfirmationDialog extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string,
    confirmActionText: React.PropTypes.string,
    cancelActionText: React.PropTypes.string,
    titleText: React.PropTypes.string,
    messageText: React.PropTypes.string,
    confirmAction: React.PropTypes.func,
    cancelAction: React.PropTypes.func
  };

  static defaultProps = {
    confirmActionText: 'Ok',
    cancelActionText: 'Cancel'
  };

  render() {
    return (
      <div className={css.overlay}>
        <div className={css.dialog}>
          <div
            style={{ display: 'flex', alignItems: 'center', margin: '10px' }}
          >
            {this.props.icon &&
              <img className={css.dialogIcon} src={this.props.icon} />}
            <span className={css.dialogTitle}>
              {this.props.titleText}
            </span>
          </div>
          <div className={css.dialogMessage}>
            {this.props.messageText}
          </div>
          <div className={css.dialogButtons}>
            <button
              type={css['p-button--base']}
              style={{ marginRight: '20px' }}
              onClick={this.props.cancelAction}
            >
              {this.props.cancelActionText}
            </button>
            <button
              type={css['p-button--neutral']}
              style={{ marginRight: '20px' }}
              onClick={this.props.confirmAction}
            >
              {this.props.confirmActionText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
