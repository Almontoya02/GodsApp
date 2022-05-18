import React from 'react'
import './tarjetStyles.css'

export const Tarjetgod = ({id,name,description,img}) => {
  return (
    <div class="card">
      <h2 class="card-title">{name}</h2>
      <img src={img} alt=""/>
      <p class="card-desc">{description}</p>
    </div>
  )
}
