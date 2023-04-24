import './style.css';

function Filter() {
    function handleFilterClick() {
        const filter = document.querySelector(".filter__options");
        filter.classList.toggle('filter__options--open');
    }

    return(
        <button className='filter' onClick={handleFilterClick}>
            <span className='filter__text'>Filter by Region</span>
            <svg className='filter__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
            <div className="filter__options">
                <span className='filter__options__btns'>Africa</span>
                <span className='filter__options__btns'>America</span>
                <span className='filter__options__btns'>Asia</span>
                <span className='filter__options__btns'>Europe</span>
                <span className='filter__options__btns'>Oceania</span>
            </div>
        </button>
    )
}


export default Filter;