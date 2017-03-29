import React from 'react'
import css from './Footer.css'

import defaultLogo from './assets/logo.png'
const defaultName = 'Ubuntu'
const defaultCopyright = '© 2017 Canonical Ltd. Ubuntu and Canonical are registered trademarks of Canonical Ltd.'

function Footer({
  children,
  firstLine,
  copyright = defaultCopyright,
  logo = defaultLogo,
  name = defaultName,
  link,
  termsUrl,
}) {

  const img = (
    <img className={css.logo}
      src={logo}
      alt={name}
      height='48'
    />
  )

  return (
    <footer className={css.main}>
      {children || (
        <div className={css.content}>
          <div className={css.infos}>
            {firstLine && (
              <p>{firstLine}</p>
            )}
            <span className={css.copyright}>
              {copyright}  -
              <a
                href={termsUrl? termsUrl: null}
                target='_blank'
                style={{textDecoration: 'none'}}
              >
                {'Terms of service'}</a>
            </span>
          </div>
          {link
            ? (
              <a href={link} target='_blank'>
                {img}
              </a>
            )
            : img
          }
        </div>
      )}
    </footer>
  )
}

export default Footer
