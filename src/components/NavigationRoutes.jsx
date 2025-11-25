import React from 'react'
import style from '../styles/NavigationRoutes.module.css'

function NavigationRoutes() {
  return (
        <ul className={style.navigation_routes}>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
        </ul>
  )
}

export default NavigationRoutes
