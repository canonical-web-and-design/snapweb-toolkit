import React from 'react'
import './Footer.css'

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
}) {

  const img = (
    <img className='Footer-logo'
      src={logo}
      alt={name}
      height='48'
    />
  )
  
  return (
    <footer className='Footer'>
      {children || (
        <div className='Footer-in'>
          <div className='Footer-infos'>
            <p>{firstLine}</p>
            <p className='Footer-copyright'>
              {copyright}  -  <a>{'Terms of service'}</a>
            </p>
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
