import './Navigation.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {

    const onSubmit = (e) => {
        e.preventDefault()
        setSearchTerm(searchTerm)
    }

    return (
        <form onSubmit={onSubmit}>
            <input
            className='nav__search'
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            >

            </input>
        </form>

    )
}

export default SearchBar;
