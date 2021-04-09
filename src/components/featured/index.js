import './style.css'
import Computer from '../../images/image-feature/image-computer.png'
import Mobile from '../../images/image-feature/image-devices.png'

export default function Featured(){
    return(
    <div>
        <div className="container-content">
            <section className="firt-content-container">
                <img src={Computer} id="computer" />
                <div>
                    <h2>The social network of the future</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has 
                        survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. 
                    </p>
                </div>
            </section>
            <section className="last-content-container" >
                <img src={Mobile} id="mobile" />
                <div>
                    <h2>Connected lives in mobile phone</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has 
                        survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. 
                    </p>
                </div>
            </section>
        </div>
    </div>
    )
}