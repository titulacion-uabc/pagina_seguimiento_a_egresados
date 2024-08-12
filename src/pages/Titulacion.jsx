import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import GridTitulacion from '../components/Titulacion/Grid-TituluacionPaso1/GridTitulacion'
import GridTitulacionDos from '../components/Titulacion/Grid-TitulacionPaso2/GridTitulacionDos'

function Titulacion() {
  return (
    <>
    <NavBar />

    <GridTitulacion />

    <GridTitulacionDos />

    <Footer />
  </>
  )
}

export default Titulacion