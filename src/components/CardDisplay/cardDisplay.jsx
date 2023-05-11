import './style.css';
import Card from './cards/card';
import { useState, useEffect } from 'react';


function CardDisplay(props) {
    const darkMode = props.darkMode;
    const countryCards = props.countryCards;
    const [ searchActive, setSearchActive ] = useState(false)
    const [ filterOpen, setFilterOpen ] = useState(false)
    const [ filterOption, setFilterOption ] = useState(null)
    const [ search, setSearch ] = useState('')


    useEffect(() => {
        setSearchActive(search !== '')
    }, [search])

    function handleTextInput(event) {
        setSearch(event.target.value)
    }

    function handleFilterClick() {
        setFilterOpen(!filterOpen)
    }

    function handleFilterOption(event) {
        if(filterOption === event.target.textContent){
            setFilterOption(null)
        } else {
            setFilterOption(event.target.textContent)
        }
    }
    

    return(
        <>
            <div className={darkMode ? 'search-bar--dark' : "search-bar"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={darkMode ? 'search-bar__icon--dark' : 'search-bar__icon'}>
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
                <input type="text" className={darkMode ? 'search-bar__input--dark' :    'search-bar__input'}   placeholder='Search for a country...' onChange={handleTextInput}/>
            </div>

            <button className={darkMode ? 'filter--dark' : 'filter'} onClick={handleFilterClick}>
                <span className='filter__text'>{filterOption === null ? 'Filter by Region' : filterOption}</span>
                <svg className={darkMode ? 'filter__icon--dark' : 'filter__icon'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                </svg>
                <div className={darkMode ? 
                    filterOpen ? 'filter__options filter__options--open--dark' : 'filter__options' 
                    : 
                    filterOpen ? 'filter__options filter__options--open' : 'filter__options'
                    }>
                    <span className={darkMode ? 
                        filterOption === 'Africa' ? 
                        'filter__options__btns--dark--active filter__options__btns--dark' :
                        'filter__options__btns--dark'
                        : 
                        filterOption === 'Africa' ? 
                        'filter__options__btns--active filter__options__btns' :
                        'filter__options__btns'
                        } onClick={handleFilterOption}>Africa</span>
                    <span className={darkMode ? 
                        filterOption === 'Americas' ? 
                        'filter__options__btns--dark--active filter__options__btns--dark' :
                        'filter__options__btns--dark'
                        : 
                        filterOption === 'Americas' ? 
                        'filter__options__btns--active filter__options__btns' :
                        'filter__options__btns'
                        } onClick={handleFilterOption}>Americas</span>
                    <span className={darkMode ? 
                        filterOption === 'Asia' ? 
                        'filter__options__btns--dark--active filter__options__btns--dark' :
                        'filter__options__btns--dark'
                        : 
                        filterOption === 'Asia' ? 
                        'filter__options__btns--active filter__options__btns' :
                        'filter__options__btns'
                        } onClick={handleFilterOption}>Asia</span>
                    <span className={darkMode ? 
                        filterOption === 'Europe' ? 
                        'filter__options__btns--dark--active filter__options__btns--dark' :
                        'filter__options__btns--dark'
                        : 
                        filterOption === 'Europe' ? 
                        'filter__options__btns--active filter__options__btns' :
                        'filter__options__btns'
                        } onClick={handleFilterOption}>Europe</span>
                    <span className={darkMode ? 
                        filterOption === 'Oceania' ? 
                        'filter__options__btns--dark--active filter__options__btns--dark' :
                        'filter__options__btns--dark'
                        : 
                        filterOption === 'Oceania' ? 
                        'filter__options__btns--active filter__options__btns' :
                        'filter__options__btns'
                        } onClick={handleFilterOption}>Oceania</span>
                </div>
            </button>

            <div className='country-cards'>
                {countryCards.filter((value) => {
                    if (value.name.common.toLowerCase().includes(search) && value.region === filterOption) {
                        return value
                    } else if(value.name.common.toLowerCase().includes(search) && filterOption === null) {
                        return value
                    } else if(searchActive === false && value.region === filterOption) {
                        return value
                    } else if(searchActive === false && filterOption === null) {
                        return value
                    }
                })
                .map((country) => ( 
                    <Card key={country.name.common} country={country} isDarkMode={darkMode} countryCards={countryCards} />
                ))
                } 
            </div>
        </>
    )
}


export default CardDisplay;
