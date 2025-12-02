import React from 'react'
/* import Row from './Row' */
import classNames from 'classnames';
import PrimaryCard from './PrimaryCard';
import style from '../styles/Main.module.css'
import '../styles/style-sheet.css'

function Main() {
  const mainClasses = [
    style.text_background,
    style.font_lg,
    'clase1',
    'clase2',
    'shadow-sm'
  ].join(" ")
  const mainClassesDos = classNames(
    style.text_background,
    style.font_lg,
    "clase1",
    "clase2",
    "shadow-sm"
  ); 
  
  return (
    <>
      {/*  <Row /> */}
      {/* MÉTODO 1: Varias clases de un archivo .css dentro de un ClassName */}
      <h1 className="clase1 clase2">Título de MAIN</h1>
      {/* MÉTODO 2: Estilos en linea con style */}
      <h3 style={{ color: "black", fontSize: "1rem", backgroundColor: "red" }}>
        Subtítulo de main
      </h3>
      {/* MÉTODO 3: Template Literals */}
      <h1 className={`${style.text_background} ${style.font_lg} clase1 clase2`}>
        Título de MAIN
      </h1>
      {/* MÉTODO 4: .join() */}
      <h1 className={mainClasses}>título de Main2</h1>
      {/* MÉTODO 5: classnames() */}
      <h1 className={mainClassesDos}>título de Main3</h1>
      <div className={style.main_grid}>
        <PrimaryCard />
        <PrimaryCard />
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
