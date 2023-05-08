import './style.css';
import Card from '../cards/card';
import Filter from '../filter/filter';
import { useState, useEffect } from 'react';

function SearchBar(props) {
    const darkMode = props.isDarkMode;
    const countryCards = props.countryCards;
    const [ searchActive, setSearchActive ] = useState(false)
    let [ search, setSearch ] = useState('')


    useEffect(() => {
        setSearchActive(search !== '')
        props.isSearching(search !== '')
        console.log()
    }, [search, props, searchActive])

    function handleTextInput(event) {
        setSearch(event.target.value)
    }
    

    return(
        <>
            <div className={darkMode ? 'search-bar--dark' : "search-bar"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={darkMode ? 'search-bar__icon--dark' : 'search-bar__icon'}>
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
                <input type="text" className={darkMode ? 'search-bar__input--dark' :    'search-bar__input'}   placeholder='Search for a country...' onChange={handleTextInput}/>
            </div>
            <Filter isDarkMode={darkMode} />
            <div className='country-cards'>
                {countryCards.filter((value) => {
                    if(searchActive === false) {
                        return value
                    } else if(value.name.common.toLowerCase().includes(search)) {
                        return value
                    }
                })
                .map((country) => ( 
                    <Card key={country.name.common} country={country} isDarkMode={darkMode} />
                ))
                } 
            </div>
        </>
    )
}


export default SearchBar;