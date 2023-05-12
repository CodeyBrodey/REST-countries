import './style.css'

import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'


function Card(props) {
    /* General */
    const [ borderCountry, setborderCountry ] = useState(null)

    /* PropTypes */
    Card.propTypes = {
        country: PropTypes.shape({
            name: PropTypes.shape({
                common: PropTypes.string.isRequired,
                nativeName: PropTypes.object,
            }).isRequired,
            flags: PropTypes.shape({
                png: PropTypes.string.isRequired,
            }).isRequired,
            population: PropTypes.number.isRequired,
            region: PropTypes.string.isRequired,
            subregion: PropTypes.string,
            capital: PropTypes.array,
            tld: PropTypes.array,
            currencies: PropTypes.object,
            languages: PropTypes.object,
            borders: PropTypes.array,
        }).isRequired,
        countryCards: PropTypes.array.isRequired,
        darkMode: PropTypes.bool.isRequired,
    }

    /* Props */
    let { name, flags, population, region, subregion, capital, tld, currencies, languages, borders } = props.country
    const countryCards = props.countryCards
    const darkMode = props.darkMode


    /* Set card open or close */
    const [ cardOpen, setCardOpen ] = useState(false)

    function handleClick() {
        setCardOpen(true)
        window.scrollTo({
            top: 0,
        })
    }

    function handleBackClick() {
        setCardOpen(false)
        setborderCountry(null)
    }

    useEffect(() => {
        const cards = document.querySelectorAll('.card, .card--dark')
        if(cardOpen){
            cards.forEach((card) => {
                card.style.display = 'none'
            })
        } else {
            cards.forEach((card) => {
                card.style.display = 'block'
            })
        }
    }, [cardOpen])


    /* countryCards object value extraction */
    let nativeName = name.nativeName
    let officialNativeName
    let currency
    let language

    if(borderCountry !== null && languages && typeof languages === 'object') {
        languages = borderCountry.languages
        Object.values(languages).forEach((value) => {
            language = value
        })
    } else if(languages && typeof languages === 'object') {
        Object.values(languages).forEach((value) => {
            language = value
        })
    }

    if(borderCountry !== null && languages && typeof languages === 'object') {
        currencies = borderCountry.currencies
        Object.values(currencies).forEach((value) => {
            currency = value.name
        })
    } else if(currencies && typeof currencies === 'object') {
        Object.values(currencies).forEach((value) => {
            currency = value.name
        })
    }
    
    if(borderCountry !== null && languages && typeof languages === 'object') {
        nativeName = borderCountry.name.nativeName
        Object.values(nativeName).forEach((value) => {
            officialNativeName = value.official
        })
    } else if(nativeName && typeof nativeName === 'object') {
        Object.values(nativeName).forEach((value) => {
            officialNativeName = value.official
        })
    } 
    

    if(cardOpen === true) {
        return(
            <div className={ darkMode ? 'card--open--dark' : 'card--open' }>
                <button className={ darkMode ? 'card--open__button--dark card--open__button__back' : 'card--open__button card--open__button__back' } onClick={ handleBackClick }> 
                    <svg className='card--open__button__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/>
                    </svg> Back
                </button>
                    
                <div className="country-container">
                    <img className='card--open__img' src={ borderCountry ? borderCountry.flags.png : flags.png } alt="" />

                    <div className='card--open__info'>
                        <h2>{ borderCountry ? borderCountry.name.common : name.common }</h2>

                        <div className="detail-container">
                            <div className='card--open__info__details'>
                                <p className='card__native'>Native Name: <span className='card__native--result'>{ officialNativeName }</span></p>

                                <p className='card__population'>Population: <span className='card__population--result'>{ borderCountry ? borderCountry.population.toLocaleString() : population.toLocaleString() }</span></p>

                                <p className='card__region'>Region: <span className='card__region--result'>{ borderCountry ? borderCountry.region : region }</span></p>

                                <p className='card__subregion'>Sub Region: <span className='card__subregion--result'>{ borderCountry ? borderCountry.subregion : subregion }</span></p>

                                <p className='card__capital'>Capital: <span className='card__capital--result'>{ borderCountry ? borderCountry.capital : capital }</span></p>
                            </div>

                            <div className='card--open__info__technical'>
                                <p className='card__domain'>Top Level Domain: <span className='card__domain--result'>{ borderCountry ? borderCountry.tld[0] : tld[0] }</span></p>

                                <p className='card__currencies'>Currencies: <span className='card__currencies--result'>{ currency }</span></p>

                                <p className='card__languages'>Languages: <span className='card__languages--result'>{ language }</span></p>
                            </div>
                        </div>
                    

                        {borders ?
                            <div className='card--open__info__borders'>
                                <h3>Border Countries:</h3>

                                <div className="card--open__info__borders__buttons">
                                    {borderCountry && borders ?
                                    borderCountry.borders.map(border => {
                                        const borderCountry = countryCards.find(c => c.cca3 === border);
                                        function handleBorderClick() {
                                            setborderCountry(borderCountry)
                                        }

                                        return (
                                            <button className={darkMode ? 'card--open__button--dark' : 'card--open__button'} key={border} onClick={handleBorderClick}>
                                                {borderCountry.name.common}
                                            </button>
                                        )
                                    }) :
                                    borders.map(border => {
                                        const borderCountry = countryCards.find(c => c.cca3 === border);
                                        function handleBorderClick() {
                                            setborderCountry(borderCountry)
                                        }

                                        return (
                                            <button className={darkMode ? 'card--open__button--dark' : 'card--open__button'} key={border} onClick={handleBorderClick}>
                                                {borderCountry.name.common}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className={ darkMode ? 'card--dark' : 'card' } onClick={ handleClick }>
            <img src={ flags.png } alt="" className='card__img'/>

            <div className="card__info">
                <h2 className='card__h2'>{ name.common }</h2>

                <div className="card__info__details">
                    <p className='card__population'>Population: <span className='card__population--result'>{ population.toLocaleString() }</span></p>

                    <p className='card__region'>Region: <span className='card__region--result'>{ region }</span></p>

                    <p className='capital'>Capital: <span className='card__capital--result'>{ capital }</span></p>
                </div>
            </div>
        </div>
    )
}


export default Card
