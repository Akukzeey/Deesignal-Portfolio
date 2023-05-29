import heroImg from '../../images/hero-img.jpg'
import {Link} from "react-router-dom";
import '../home.scss'
import './testimonial.scss'


export default function Testimonials() {
    return(
        <div className='testimonials-div'>
            <h1 className='testimonials-header'>What Our Clients Say About Us</h1>
            <div style={{display:'flex',color:"white",justifyContent:'center',alignItems:'center'}} className='row'>
            <div className='testimonials-content col-6'>
                <span className='testimonials-span'>"</span>
                <div style={{marginBottom:'-10px'}}>
                <p style={{fontSize:'22px',color:'white'}}>The service is worth more than the price</p>
                <p className='testimonials-p-tag'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem distinctio eos laborum minima nemo nulla pariatur quis sed sint tempore.... <Link className='testimonials-link-tag'  to='/'>Find Out More....</Link></p>
                </div>
                <div className='avatar-div'>
                    <img src={heroImg} alt="avatar-picture" className='avatar-picture'/>
                    <p className='testimonials-p-tag'>Harrison Balaji</p>
                </div>
            </div>
                <div className='testimonials-content col-6'>
                    <span className='testimonials-span'>"</span>
                    <div style={{marginBottom:'-10px'}}>
                        <p style={{fontSize:'22px',color:'white'}}>The service is worth more than the price</p>
                        <p className='testimonials-p-tag'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem distinctio eos laborum minima nemo nulla pariatur quis sed sint tempore.... <Link className='testimonials-link-tag'  to='/'>Find Out More....</Link></p>
                    </div>
                    <div className='avatar-div'>
                        <img src={heroImg} alt="avatar-picture" className='avatar-picture'/>
                        <p className='testimonials-p-tag'>Harrison Balaji</p>
                    </div>
                </div>
            </div>
        </div>
    )
}