import './SearchBar.scss';

export default function SearchBar() {
    return(
        <form action="#" className="search">
            <input type="text" className="search_input" placeholder='Search'/>
            <button className="search_button"></button>
        </form>
    )
}