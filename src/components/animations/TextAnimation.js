import './TextAnimation.css'
import {FaArrowRight} from "@react-icons/all-files/fa/FaArrowRight";
import '../home.scss'

export default function TextAnimation() {
    return(
        <div className='animation-container'>
            <div className="text-animation">
                <h1 className="target">Let's Shot <FaArrowRight className='arrow-btn'/> Let's Shot <FaArrowRight className='arrow-btn'/> Let's Shot <FaArrowRight className='arrow-btn'/></h1>
            </div>
        </div>
    )
}