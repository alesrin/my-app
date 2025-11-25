import React from 'react'
/* Importamos el objeto styles desde el module que se corresponde con mi archivo */
import styles from '../styles/ContactInfo.module.css'

function ContactInfo() {
  return (
    /* Le digo que utilice un atributo del objeto styles */
    <div className={styles.contact_info}>
        <a href="">
            <h5>Teléfono</h5>
        </a>
        <a href="">
            <h5>Mail</h5>
        </a>
        <a href="">
            <h5>Dirección</h5>
        </a>
        <a href="">
            <h5>Ciudad</h5>
        </a>
    </div>
  )
}

export default ContactInfo
