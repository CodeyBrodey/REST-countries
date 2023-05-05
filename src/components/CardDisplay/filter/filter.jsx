import { useState } from 'react';
import './style.css';

function Filter(props) {
    const darkMode = props.isDarkMode; 
    const [ filterOpen, setFilterOpen ] = useState(false)

    function handleFilterClick() {
        setFilterOpen(!filterOpen)
    }

    function handleFilterOption() {
        document.querySelector('.filter__option--Africa').addEventListener('click', () => {
            
            console.log('nice')
        })
        console.log()
    }
    

    return(
        <button className={darkMode ? 'filter--dark' : 'filter'} onClick={handleFilterClick}>

            <span className='filter__text'>Filter by Region</span>
            <svg className={darkMode ? 'filter__icon--dark' : 'filter__icon'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
            <div className={darkMode ? 
                filterOpen ? 'filter__options filter__options--open--dark' : 'filter__options' 
                : 
                filterOpen ? 'filter__options filter__options--open' : 'filter__options'
                }>
                <span className='filter__options__btns filter__option--Africa' onClick={handleFilterOption}>Africa</span>
                <span className='filter__options__btns filter__option--America' onClick={handleFilterOption}>America</span>
                <span className='filter__options__btns filter__option--Asia' onClick={handleFilterOption}>Asia</span>
                <span className='filter__options__btns filter__option--Europe' onClick={handleFilterOption}>Europe</span>
                <span className='filter__options__btns filter__option--Oceania' onClick={handleFilterOption}>Oceania</span>
            </div>

        </button>
    )
}


export default Filter;