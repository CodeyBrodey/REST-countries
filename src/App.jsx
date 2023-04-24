import './App.css'
import Filter from './components/filter/filter'
import Header from './components/header/header'
import SearchBar from './components/search/search'
import CountryCards from './components/cards/CountryCards'

function App() {
  

  return (
    <>
      <Header />
      <SearchBar />
      <Filter />
      <CountryCards />
    </>
  )
}

export default App
