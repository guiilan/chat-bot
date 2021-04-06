import './style.css'
import MenuIcon from '../../images/image-header/menu.svg'

export default function Header(){
    return(
        <div className="header-container">
            <div className="container-menu">
                <h2>iSocial</h2>
                <button className="menu-button">
                    <img src={MenuIcon} alt="Icone do Menu" />
                </button>
            </div>
            <h2></h2>
            <p>Um novo jeito de conectar pessoas</p>
        </div>
    )
}