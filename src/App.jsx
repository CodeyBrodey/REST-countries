import './App.css'
import Header from './components/header/header'
import CardDisplay from './components/CardDisplay/cardDisplay'
import { useState, useEffect } from 'react'

function App() {
  let [countries, setCountries] = useState([]);

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
      <Header />
      <CardDisplay cards={countries} />
    </>
  )
}

export default App
