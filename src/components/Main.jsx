import React from 'react'
/* import Row from './Row' */
import PrimaryCard from './PrimaryCard';
import style from '../styles/Main.module.css'

function Main() {
  
  return (
    <>
     {/*  <Row /> */}
   {/*  <div className={style.main_grid}>
      <PrimaryCard />
      <PrimaryCard />
      <PrimaryCard />
      <PrimaryCard />
      <PrimaryCard />
      <PrimaryCard />
    </div> */}


    <div className={style.advanced_grid}>
      <div className={style.header}></div>
      <div className={style.aside}></div>
      <div className={style.content}></div>
      <div className={style.footer}></div>
    </div>

    <div className={style.ryanair}>
      <div className={style.fila1}></div>
      <div className={style.fila2}></div>
      <div className={style.fila3}></div>
      <div className={style.fila4}></div>
      <div className={style.fila5}></div>
    </div>
    </>
  )
}

export default Main
