import './style.css'
import Bot from '../../images/bot.svg'

export default function Msg(){
    return(
        <div>
            <div className="botMsg">
                <img src={Bot} alt="bot" />
                <p> Bot </p>
            </div>
            <div className="userMsg">
                <p> User </p>
            </div>
        </div>
    )
}