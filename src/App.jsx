import './App.css'

import { useState, useEffect } from 'react'

import Header from './components/header/header'
import CardDisplay from './components/CardDisplay/CardDisplay'


function App() {
  /* Fetch country data */
  let [ countryCards, setCountryCards ] = useState([])

  async function getData() {
    let res = await fetch('https://restcountries.com/v3.1/all')
    const data = await res.json()
    setCountryCards(data)
  }

  useEffect(() => { getData() }, [])


  /* Set body dark-mode */
  const [ darkModeActive, setDarkModeActive ] = useState(false)
  const body = document.querySelector('body')

  darkModeActive ? 
  body.style.backgroundColor = 'var(--dark-blue)': 
  body.style.backgroundColor = 'hsl(0, 0%, 98%)'


  return (
    <>
      <Header darkMode={ value => { setDarkModeActive(value) } } />
      <CardDisplay countryCards={ countryCards } darkMode={ darkModeActive } />
    </>
  )
}


export default App
