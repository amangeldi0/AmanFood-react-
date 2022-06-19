import menu from './scr/menu.png'
import search from './scr/lupa.png'
import basket from './scr/basket.png'
import './header.css'
import {useState} from "react";
function Header(){
    const [nav, setNav] = useState(false);
    function changeState(){
        setNav(() => {
            return !nav
        })
    }
    return(
        <div className='header'>
            <div className='header__container'>
                <div><a className='header__logo'>AMAN<span>FOOD</span></a></div>
                <nav className={(nav === false) ? 'header__navbar' : 'header__navbar__activate'}>
                    <a>Home</a>
                    <a>Restaurants</a>
                    <a>About</a>
                </nav>
                <div className="header__icons">
                    <div id="menu"><img src={menu} onClick={changeState}/></div>
                    <div id="search-icon"><img src={search}/></div>
                    <div id="basket"><img src={basket}/> </div>
                </div>
            </div>

        </div>
    )
}
export default Header;