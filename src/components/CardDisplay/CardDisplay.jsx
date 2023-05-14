import './style.css'

import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

import Card from './cards/card'


function CardDisplay(props) {
    /* PropTypes */
    CardDisplay.propTypes = {
        countryCards: PropTypes.array.isRequired,
        darkMode: PropTypes.bool.isRequired,
    }

    /* Props */
    const darkModeActive = props.darkMode
    const countryCards = props.countryCards


    /* Search */
    const [ searchActive, setSearchActive ] = useState(false)
    const [ searchQuery, setSearchQuery ] = useState('')

    useEffect(() => { setSearchActive(searchQuery !== ''), console.log(searchQuery) }, [searchQuery])

    function handleSearchInput(event) {
        setSearchQuery(event.target.value)
    }


    /* Filter */
    const [ filterOpen, setFilterOpen ] = useState(false)
    const [ filterOptionStatus, setFilterOptionStatus ] = useState(null)

    function handleFilterClick() {
        setFilterOpen(!filterOpen)
    }

    function handleFilterOption(event) {
        filterOptionStatus === event.target.textContent ?
        setFilterOptionStatus(null) :
        setFilterOptionStatus(event.target.textContent) 
    }
    

    return(
        <>
            <div className='CardDisplay-container'>
                <div className={ darkModeActive ? 'search-bar--dark' : "search-bar" }>
                    <svg className={ darkModeActive ? 'search-bar__icon--dark' : 'search-bar__icon' } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>

                    <input className={ darkModeActive ? 'search-bar__input--dark' : 'search-bar__input' } type="text" placeholder='Search for a country...' onChange={ handleSearchInput } />
                </div>

                <button className={ darkModeActive ? 'filter--dark' : 'filter' } onClick={ handleFilterClick }>
                    <span className='filter__text'>{ filterOptionStatus === null ? 'Filter by Region' : filterOptionStatus }</span>

                    <svg className={ darkModeActive ? 'filter__icon--dark' : 'filter__icon' } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                    </svg>

                    <p className={ darkModeActive ? 
                        filterOpen ? 'filter__options filter__options--open--dark' : 'filter__options' 
                        : 
                        filterOpen ? 'filter__options filter__options--open' : 'filter__options' }>
                        <span className={darkModeActive ? 
                        filterOptionStatus === 'Africa' ? 
                        'filter__options__btns--dark--active filter__options__btns--dark' :
                        'filter__options__btns--dark'
                        : 
                        filterOptionStatus === 'Africa' ? 
                        'filter__options__btns--active filter__options__btns' :
                        'filter__options__btns'
                            } onClick={handleFilterOption}>Africa</span>

                        <span className={darkModeActive ? 
                        filterOptionStatus === 'Americas' ? 
                        'filter__options__btns--dark--active filter__options__btns--dark' :
                        'filter__options__btns--dark'
                        : 
                        filterOptionStatus === 'Americas' ? 
                        'filter__options__btns--active filter__options__btns' :
                        'filter__options__btns'
                            } onClick={handleFilterOption}>Americas</span>

                        <span className={darkModeActive ? 
                        filterOptionStatus === 'Asia' ? 
                        'filter__options__btns--dark--active filter__options__btns--dark' :
                        'filter__options__btns--dark'
                        : 
                        filterOptionStatus === 'Asia' ? 
                        'filter__options__btns--active filter__options__btns' :
                        'filter__options__btns'
                            } onClick={handleFilterOption}>Asia</span>

                        <span className={darkModeActive ? 
                        filterOptionStatus === 'Europe' ? 
                        'filter__options__btns--dark--active filter__options__btns--dark' :
                        'filter__options__btns--dark'
                        : 
                        filterOptionStatus === 'Europe' ? 
                        'filter__options__btns--active filter__options__btns' :
                        'filter__options__btns'
                            } onClick={handleFilterOption}>Europe</span>
                        
                        <span className={darkModeActive ? 
                        filterOptionStatus === 'Oceania' ? 
                        'filter__options__btns--dark--active filter__options__btns--dark' :
                        'filter__options__btns--dark'
                        : 
                        filterOptionStatus === 'Oceania' ? 
                        'filter__options__btns--active filter__options__btns' :
                        'filter__options__btns'
                            } onClick={handleFilterOption}>Oceania</span>
                    </p>
                </button>
            </div>
            
            <div className='country-cards'>
                {countryCards.filter((value) => {
                    if(searchActive && value.name.common.toLowerCase().includes(searchQuery) && value.region === filterOptionStatus) return value
                    if(searchActive && value.name.common.toLowerCase().includes(searchQuery) && filterOptionStatus === null) return value
                    if(searchActive === false && value.region === filterOptionStatus) return value
                    if(searchActive === false && filterOptionStatus === null) return value
                })
                .map((country) => ( 
                    <Card key={ country.name.common } country={ country } darkMode={ darkModeActive } countryCards={ countryCards } />
                ))
                } 
            </div>
        </>
    )
}


export default CardDisplay
