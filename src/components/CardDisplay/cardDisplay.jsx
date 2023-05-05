import SearchBar from './search/search'
import Filter from './filter/filter'
import Card from './cards/card'
import PropTypes from 'prop-types'
import { useState } from 'react';

function CardDisplay(props){
    const countryCards = props.cards;
    const darkMode = props.darkMode;
    const [ searchActive, setSearchActive ] = useState(false)
    const [ filterActive, setFilterActive ] = useState(false)


    CardDisplay.propTypes = {
        cards: PropTypes.object.isRequired
    }


    return (
        <>
            <SearchBar isDarkMode={darkMode} countryCards={props.cards} isSearching={value => setSearchActive(value)} />
            <Filter isDarkMode={darkMode} countryCards={props.cards} />
        </>
    )
}

export default CardDisplay