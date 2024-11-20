import { useState } from 'react'

const Button = ({count, onClick}) => {

  return (
    <button onClick={onClick}>
        Total # of clicks {count}
    </button>
  )
}

export default Button