
import menu from './scr/menu.png'
import search from './scr/lupa.png'
import basket from './scr/basket.png'
import './style.css'
function Header(){
    return(
        <div className='header'>
            <div><a className='header__logo'>AMAN<span>FOOD</span></a></div>
            <nav className='header__navbar'>
                <a>Home</a>
                <a>Restaurants</a>
                <a>About</a>
            </nav>
            <div className="header__icons">
                <div id="menu"><img src={menu}/></div>
                <div id="search-icon"><img src={search}/></div>
                <div id="basket"><img src={basket}/> </div>
            </div>
        </div>
    )
}
export default Header;