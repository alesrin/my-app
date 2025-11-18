import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import style from '../styles/Home.module.css'

function Home() {
  return (
    <div className={style.home}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
