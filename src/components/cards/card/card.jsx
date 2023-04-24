import './style.css';
import PropTypes from 'prop-types';
import { useState } from 'react';


function Card(props) {
    const { cardOpen, setCardOpen } = useState(false);
    const { name, flags, population, region, capital } = props.country;

    Card.propTypes = {
        country: PropTypes.shape({
            name: PropTypes.shape({
            common: PropTypes.string.isRequired,
            }).isRequired,
            flags: PropTypes.shape({
            png: PropTypes.string.isRequired,
            }).isRequired,
            population: PropTypes.number.isRequired,
            region: PropTypes.string.isRequired,
            capital: PropTypes.string.isRequired,
        }).isRequired,
    };

    function handleClick() {
        setCardOpen(true);
        console.log(cardOpen)
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
