import React from 'react'
/* import Row from './Row' */
import PrimaryCard from './PrimaryCard';
import style from '../styles/Main.module.css'

function Main() {
  
  return (
    <>
      {/*  <Row /> */}
      <div className={style.main_grid}>
        {/* MÉTODO 1: Varias clases de un archivo .css dentro de un ClassName */}
        <PrimaryCard className="clase1 clase2" />
        {/* MÉTODO 2: Estilos en linea con style */}
        <PrimaryCard
          style={{ color: "red", fontSize: "1rem", backgroundColor: "red" }}
        />
        {/* FORMA INCORRECTA de añadir estilos en línea */}
        <PrimaryCard style="color:red; font-size: 1rem;" />
        <PrimaryCard />
        <PrimaryCard />
        <PrimaryCard />
      </div>
     {/*  
     - **className**: Para aplicar clases CSS definidas en archivos .css o
      .module.css 
      - **style**: Para estilos inline calculados dinámicamente con
      JavaScript */}


      {/*  <div className={style.advanced_grid}>
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
    </div> */}
    </>
  );
}

export default Main
