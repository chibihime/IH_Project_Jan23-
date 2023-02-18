import React from 'react'


import './content.css'
const Content = (props) => {
  return (
    <div className='content__container'>
        <p>{props.start_para}</p>
        <h3>{props.heading}</h3>
        <h3 className='content__container-yellow'>{props.yellow}</h3>
        <p>{props.content}</p>
    </div>
  )
}

export default Content