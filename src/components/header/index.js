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
            <div className="content-container">
                <h2>Um novo jeito de conectar pessoas</h2>
                <p>Unindo vidas e conectando pessoas</p>
                <div className="buttons-container">
                    <button className="left-button">
                        Get Started
                    </button>
                    <button className="righ-buttont">
                        See More
                    </button>
                </div>

            </div>
        </div>
    )
}