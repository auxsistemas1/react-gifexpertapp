import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ( {id,title,url} ) => {
  return (
    <div className="card">
        <img  alt={title} src={url} />
        <p> {title}</p>
    </div>
  )
}

GifGridItem.propTypes = {}

export default GifGridItem