import SearchBar from './search/search'
import Filter from './filter/filter'
import Card from './cards/card'
import PropTypes from 'prop-types'

function CardDisplay(props){
    const countryCards = props.cards;
    const darkMode = props.darkMode;

    CardDisplay.propTypes = {
        cards: PropTypes.object.isRequired
    }
    


    return (
        <>
            <SearchBar isDarkMode={darkMode} />
            <Filter isDarkMode={darkMode} />
            {countryCards && 
                <div className='country-cards'>
                    {countryCards.map((country) => ( 
                        <Card key={country.name.common} country={country} isDarkMode={darkMode} />
                    ))
                  }
                </div>
            }
        </>
    )
}

export default CardDisplay