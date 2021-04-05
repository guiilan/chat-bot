import './style.css'
import Robot from '../../images/robot.svg'
import Send from '../../images/send.svg'
import Msg from '../../components/msg'


export default function Chatbot(){
    return(
        <div className="chatBot">
            <div className="header">
                <header>Fale com o nosso simpático robô </header>
                <img src={Robot} />
            </div>
            <div className="chat-area">
                <Msg />
            </div>
            <div className="input-container">
                <input>

                </input>
                <div className="image-container">
                    <img src={Send} alt="Enviar" />
                </div>
            </div>
        </div>
    )
}