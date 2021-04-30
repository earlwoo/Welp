import './Navigation.css';
import { useDispatch } from "react-redux"
import { setSearchTerm } from "../../store/search"
import { useState } from 'react';


const SearchBar = () => {
    const dispatch = useDispatch()
    // let search = useSelector(state => state.search)
    const [search, setSearch] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(setSearchTerm(search))
        setSearch('')
    }

    const onChange = (e) => {
        setSearch(e.target.value)
        dispatch(setSearchTerm(e.target.value))
    }

    return (
        <form onSubmit={onSubmit}>
            <input
            className='nav__search'
            type="text"
            placeholder="search"
            value={search}
            onChange={onChange}
            // also tried onChange={e => onChange(e)}
            // onKeyPress={onChange}
            >

            </input>
        </form>

    )
}

export default SearchBar;
