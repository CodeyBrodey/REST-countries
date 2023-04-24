import './style.css';
import PropTypes from 'prop-types';


function Card(props) {

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


    return(
        <div className="card">
            <img src={ flags.png } alt="" className='card__img'/>
            <div className="card__info">
                <h3 className='card__h3'>{ name.common }</h3>
                <p className='card__population'>Population: <span className='card__population--result'>{ population.toLocaleString() }</span></p>
                <p className='card__region'>Region: <span className='card__region--result'>{ region }</span></p>
                <p className='capital'>Capital: <span className='card__capital--result'>{ capital }</span></p>
            </div>
        </div>
    )

}


export default Card;
