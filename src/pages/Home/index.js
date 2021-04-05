import './style.css'
import Header from '../../components/header'
import { useState } from 'react';
import Chatbot from '../../components/chatbot'

export default function Home() {

  const[active, setActive] = useState(false);

  return (
    <div>
      <Header />
      <div className="button-container">
        <button onClick={() => {
          if(active===false){
            setActive(true)
          }else{
            setActive(false)
          }
        }}>
          { active ? 
          <p>
            Encerrar chat
          </p>  
          :
          <p>
            Iniciar chat
          </p>
        }
        </button>
        { active ? 
          <div id="open">
            <Chatbot />
          </div>
          :
          <div>
            
          </div>
        }
      </div>
    </div>
  );
}


