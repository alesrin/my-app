import React from 'react'
/* INSTRUCCIONES PARA IMPORTAR MÓDULOS DE ESTILOS EN UN COMPONENTE REACT:

Importo el componente style desde el módulo Navigation.module.css. A tener en cuenta:
0- La sintaxis de los imports es:
  import (lo que quiero importar) from ('desde dónde lo importo');
1- Estoy importando un objeto de jsx "style" que tiene como atributos todos los estilos que estén en el archivo Navigation.module.css
2- Tengo que especificar correctamente la ruta desde la que estoy importando. En este ejemplo el archivo "Navigation.module.css" está dentro de una carpeta styles, por eso primero utilizo los ../ para subir un nivel (desde donde yo estoy ahora, que es Navihation.jsx) y luego añado la carpeta styles y por últilo el archivo
*/

import styles from '../styles/Navigation.module.css';
/* Aquí abajo estoy importando otros componentes para anidarlos dentro de este: */
import PrimaryNav from './PrimaryNav';
import Logo from './Logo';
import LoginButton from './LoginButton';

function Navigation() {
  return (
      /* Para aplicar estilos de Módulos de CSS en React, tengo que usar la sintaxis className={styles.nombreDelEstilo}, donde "styles" es el objeto que he importado arriba y "nombreDelEstilo" es el nombre del estilo que quiero aplicar, tal y como está escrito en el archivo Navigation.module.css */
      <nav className={styles.navbar}>
        {/* Solo puedo usar en un componente los componentes que haya importado */}
        <Logo />
        <PrimaryNav />
        <LoginButton />
      </nav>
  )
}

export default Navigation
