import carousel1 from '../images/carousel-img.jpeg'
import carousel2 from "../images/carousel-img-2.jpeg";
import carousel4 from '../images/carousel-img-4.jpg';
import Navbar from "./Navbar";
import {FaArrowDown} from "@react-icons/all-files/fa/FaArrowDown";
import './home.scss'

export default function carousel() {
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-interval="500">
            <Navbar/>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={carousel1} className="carousel-img d-block w-100 carousel-img" alt="carousel img-1"/>
                </div>
                <div className="carousel-item">
                    <img src={carousel2} className="carousel-img d-block w-100 carousel-img" alt="carousel img 2"/>
                </div>
                <div className="carousel-item">
                    <img src={carousel4} className="carousel-img d-block w-100 " alt="carousel img 3"/>
                </div>
            </div>
            <div className='secondary-container'>
                <div className='bragging-rights'>
                    <p className='p-tag' style={{marginLeft:'20px'}}>Our Bragging Right.</p>
                    <div style={{display:'flex',justifyContent:"space-around"}}>
                        <div className='border-right'>
                            <h1 className='header-rights'>
                                500+
                            </h1>
                            <h2>
                                Satisfied Clients
                            </h2>
                        </div>
                        <div>
                            <h1 className='header-rights'>
                                1K+
                            </h1>
                            <h2>
                                Successful Media Coverage
                            </h2>
                        </div>
                    </div>
                    <button type="button" className="btn btn-light" style={{width:'100%',marginTop:'25px',bottom:0}}>See our works</button>
                </div>
                <div className='bragging-p-tag'>
                    <p className='p-tag'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deleniti dolorum eum eveniet quam quod ratione. Aliquid blanditiis dignissimos, eligendi et eveniet expedita facilis in inventore iste libero molestiae nobis, numquam odit, officia praesentium quod quos repellendus sapiente sunt velit vitae voluptates voluptatibus. Culpa eligendi iusto perspiciatis qui voluptate? Laborum.
                    </p>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',bottom:0}}>
                        <p className='p-tag'>Scroll Down</p>
                        <FaArrowDown className='p-tag'/>
                    </div>
                </div>
            </div>
        </div>
    )
}