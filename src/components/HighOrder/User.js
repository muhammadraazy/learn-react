import React from 'react'
import HightOrderComponent from './HightOrderComponent'

const User = ({name}) => {
  return (
    <div> {name} </div>
  )
}

export default HightOrderComponent(User)