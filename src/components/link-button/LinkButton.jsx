import React from 'react'
import { Link } from 'react-router-dom'
import './link-button.css'

export default function LinkButton({toRoute, children}) {
  return (
    <Link className='link-button' to={toRoute}>{children}</Link>
  )
}
