import React from 'react'

export default function SnapPageTags(props) {
  return (
    <div>
      <p>
        <span style={{marginRight: '15px'}}>
          <a 
            role='button'
            onClick={props.onStoreClick}
          >
            store {'\u203A'}
          </a>
        </span>
        {props.tags.map((tagname, i) => (
          <span key={i}>
            {i? <span style={{marginRight: '15px'}}></span> : null}
            <a role='button'>{tagname}</a>
          </span>
        ))}
      </p>
    </div>
  )
}
