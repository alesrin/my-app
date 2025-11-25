import React from 'react'
import ContactInfo from './ContactInfo'
import NavigationRoutes from './NavigationRoutes'
import SocialLinks from './SocialLinks'
import style from '../styles/Footer.module.css'

function Footer() {
  return (
   <section className={style.footer}>
        <ContactInfo />
        <NavigationRoutes />
        <SocialLinks />
   </section>
  )
}

export default Footer
