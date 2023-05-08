import './App.css'
import Header from './components/header/header'
import CardDisplay from './components/CardDisplay/CardDisplay'
import { useState, useEffect } from 'react'

function App() {
  let [ countries, setCountries ] = useState([]);
  const [ darkModeActive, setDarkModeActive ] = useState(false)
  const body = document.querySelector('body')

  if(darkModeActive) {
    body.style.backgroundColor = 'var(--dark-blue)'
  } else {
    body.style.backgroundColor = 'hsl(0, 0%, 98%)'
  }

  async function getData() {
    let res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    setCountries(data); 
    console.log();
  }

  useEffect(() => {
    getData();
  },[]);


  return (
    <>
      <Header isDarkMode={(value) => {setDarkModeActive(value)}} />
      <CardDisplay countryCards={countries} darkMode={darkModeActive} />
    </>
  )
}

export default App
