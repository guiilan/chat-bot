import './style.css'
import MenuIcon from '../../images/image-header/menu.svg'
import MenuMobile from './menumobile'
import Arrow from '../../images/image-header/arrow.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useState } from 'react'

export default function Header(){

    const[active, setActive] = useState(false);
    const mediaMin = useMediaQuery('(min-width:370px)');
    const mediaMax = useMediaQuery('(min-width:970px)');


    function openMenu(){
        active === false ? setActive(true) : setActive(false)
    }


    return(
        
        <div className="header-container">
            <div className="container-menu">
                <h2>iSocial</h2>
                <button className="menu-button" onClick={openMenu}>
                    <img src={MenuIcon} alt="Icone do Menu" />
                </button>
            </div>
            { active === true && mediaMin > mediaMax ?
                <div className="menu-mobile-active">
                    <MenuMobile />
                </div>
                :
                null
            }
            <div className="content-container">
                <h2>A new way of connecting people</h2>
                <p>Bringing lives together and connecting people</p>
                <div className="buttons-container">
                    <a className="left-button" href="#">
                        Get Started
                    </a>
                    <a className="righ-buttont" href="https://github.com/guiilan/isocial" target="_blank">
                        View in gitHub
                        <img src={Arrow} alt="Ver no linkedin" />
                    </a>
                </div>
            </div>
        </div>
    )
}