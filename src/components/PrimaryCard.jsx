import React from 'react'
import Button from './Button'
import style from '../styles/PrimaryCard.module.css'

function PrimaryCard() {
  return (
    <>
    <div className={style.primary_card}>
      <span>Tarjeta</span>
      <Button />
    </div>
    </>
  )
}

export default PrimaryCard
