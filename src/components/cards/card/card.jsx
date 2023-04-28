import './style.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';


function Card(props) {
    const [ cardOpen, setCardOpen ] = useState(false);
    const { name, flags, population, region, subregion, capital, tld, currencies, languages } = props.country;
    const nativeNames = name.nativeName;
    let officialName;
    let currency;
    let language;

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
        }).isRequired,
        
    };
    

    if (currencies && typeof currencies === 'object') {
        Object.values(currencies).forEach((money) => {
            currency = money.name;
        });
    }
    
    if (nativeNames && typeof nativeNames === 'object') {
        Object.values(nativeNames).forEach((native) => {
            officialName = native.official;
        });
    }


    function handleClick() {
        setCardOpen(true);
        window.scrollTo({
            top: 0,
          })
    }

    function handleBackClick() {
        setCardOpen(false)
    }

    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        if(cardOpen){
            cards.forEach((card) => {
                card.style.display = 'none';
            })
        } else {
            cards.forEach((card) => {
                card.style.display = 'block';
            })
        }
    }, [cardOpen])

    
    if(cardOpen === true) {
        return(
            <div className='card--open'>

                <button className='card--open__button' onClick={ handleBackClick }> 
                    <svg className='card--open__button__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/>
                    </svg> Back
                </button>

                <img className='card--open__img' src={ flags.png } alt="" />

                <div className='card--open__info'>
                    <h2>{ name.common }</h2>

                    <div className='card--open__info__details'>
                        <p className='card__native'>Native Name: <span className='card__native--result'>{ officialName }</span></p>

                        <p className='card__population'>Population: <span className='card__population--result'>{ population.toLocaleString() }</span></p>

                        <p className='card__region'>Region: <span className='card__region--result'>{ region }</span></p>

                        <p className='card__subregion'>Sub Region: <span className='card__subregion--result'>{ subregion }</span></p>

                        <p className='card__capital'>Capital: <span className='card__capital--result'>{ capital }</span></p>
                    </div>

                    <div className='card--open__info__technical'>
                        <p className='card__domain'>Top Level Domain: <span className='card__domain--result'>{tld[0]}</span></p>

                        <p className='card__currencies'>Currencies: <span className='card__currencies--result'>{currency}</span></p>

                        <p className='card__languages'>Languages: <span className='card__languages--result'>fix me</span></p>
                    </div>

                    <div className='card--open__info__borders'>
                        <h3>Border Countries:</h3>
                        <div className="card--open__info__borders__buttons">
                            <button className='card--open__button'>fix me</button>
                            <button className='card--open__button'>fix me</button>
                            <button className='card--open__button'>fix me</button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }


    return(
        <div className="card" onClick={ handleClick }>
            <img src={ flags.png } alt="" className='card__img'/>

            <div className="card__info">
                <h3 className='card__h3'>{ name.common }</h3>
                <div className="card__info__details">
                    <p className='card__population'>Population: <span className='card__population--result'>{ population.toLocaleString() }</span></p>

                    <p className='card__region'>Region: <span className='card__region--result'>{ region }</span></p>

                    <p className='capital'>Capital: <span className='card__capital--result'>{ capital }</span></p>
                </div>
            </div>

        </div>
    )

}


export default Card;
