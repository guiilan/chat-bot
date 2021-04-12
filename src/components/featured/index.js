import './style.css'
import HeroIllustration from '../../images/image-feature/illustration-hero.svg'
import Register from '../../images/image-feature/edit.svg'

export default function Featured(){
    return(
    <div className="parent-container">
        <div className="text-container">
            <h1>Features</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className="illustration">
            <img src={HeroIllustration} />
            <div className="background-ilustration"></div>
        </div>
        <div className="text-container">
            <h1>iSocial in one click</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className="text-container">
            <h1>iSocial in one click</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <button id="gotoregister">
                <p>Create acconut</p>
                <img src={Register} alt="Register" ></img>
            </button>
        </div>
    </div>
    )
}