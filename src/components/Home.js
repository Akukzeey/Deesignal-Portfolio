import PreLoader from "./preloader/PreLoader";
import '../mediaQuaries.scss'
import './home.scss'
import '../global.scss'
import React, {useEffect} from "react";
import {preLoaderAnim} from "./animations";
import Carousel from './Carousel'
import TextAnimation from "./animations/TextAnimation";
import heroImg from '../images/hero-img.jpg'
import colImg1 from '../images/col-img.jpg'
import colImg2 from '../images/col-img-2.jpg'
import colImg3 from '../images/col-img-3.jpg'
import blogImg2 from '../images/blog-pic-2.jpg'
import blogImg1 from '../images/blog-pic-1.jpg'
import blogImg3 from '../images/blog-pic-3.jpg'
import {FaArrowRight} from "@react-icons/all-files/fa/FaArrowRight";
import {Link} from "react-router-dom";
import Testimonials from "./elements/Testimonials";
import Footer from "./Footer";


export default function App() {

    useEffect(() => {
        preLoaderAnim()
    }, [])

    return (
        <div>
            <PreLoader/>
            <div style={{marginTop:'-16px'}} className='main-div'>
                <Carousel/>
                <TextAnimation/>

                <div className='body-container'>

                    <div className='links-div'>
                        <p className='keep-up-p'>Keep up with us on socials</p>
                        <div>
                            <Link className='social-links' href="#">Instagram</Link>
                            <Link className='social-links' href="#">Youtube</Link>
                            <Link className='social-links' href="#">Twitter</Link>
                            <Link className='social-links' style={{border: 'none'}} href="#">Facebook</Link>
                        </div>
                    </div>

                    <div className='about-us'>
                        <div className='raw about-us-container mx-auto'>
                        <div className='about-paragraph col-6'>
                            <h1>What we do at <br/> Deesignal Media</h1>
                            <p style={{marginTop:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis consequuntur eligendi eos ex facere fuga fugit laborum libero nihil nulla officiis perferendis perspiciatis placeat porro, provident, quaerat quas quia quidem quisquam quod saepe soluta suscipit temporibus vero voluptas voluptatibus!</p>
                            <a href="#" style={{color:'black'}}>FIND OUT MORE</a>
                        </div>
                        <div className='border1 col-6'>
                            <div className='image-container'>
                                <img src={heroImg} className='hero-img' alt="hero image"/>
                                <div className="overlay"></div>
                            </div>
                        </div>
                       </div>
                        <div className='what-we-do'>
                        <div className='d-flex align-items-center'>
                            <p className='skills-tag'>WEDDING FILMS</p>
                            <p className='skills-tag'>LIVE EVENT STREAMING</p>
                            <p className='skills-tag'>DOCUMENTARY FILMING</p>
                            <p className='skills-tag display-show'>AU<span className='span-skills-tag'>DIO - VISUAL SUPPORT</span></p>
                        </div>
                        </div>
                    </div>

                    <div className='works-container'>
                        <h1 style={{textAlign:'center',fontWeight:"bold"}}>Our Works</h1>
                       <div className='row d-flex justify-content-center mx-auto'>
                           <div className='col-img-div-1 col-img-div col-4'>
                               <h3>SPORT BROADCAST</h3>
                               <img className='col-img-1 col-img' src={colImg1} alt="sport broadcast img"/>
                           </div>
                           <div className='col-img-div-2 col-img-div col-4'>
                               <img className='col-img-2 col-img' src={colImg2} alt="A LOVE STORY"/>
                               <h4>A LOVE STORY</h4>
                           </div>
                           <div className='col-img-div-3 col-img-div col-4'>
                               <img className='col-img-3 col-img' src={colImg3} alt="cameraman img"/>
                               <div style={{textAlign:'end'}}>
                                   <h3>A DAY IN IBADUN ZOO</h3>
                                   <div style={{marginTop:'54px',display:'flex',justifyContent:'space-between',flexDirection:'row',alignItems:'end'}}>
                                       <Link className='view-all' href='#'><FaArrowRight/> View All</Link>
                                       <Link className='bookings' to='#'>Book Us Now</Link>
                                   </div>
                               </div>
                           </div>
                       </div>

                    </div>

                    <Testimonials/>

                    <div className='blog-cards'>
                        <h1 style={{marginBottom:'30px',fontWeight:'bold',fontSize:'35px'}}>BLOG</h1>
                        <div className='d-flex row'>
                       <div className='blog-card col-4'>
                           <div>
                               <img src={blogImg1} className='blog-img' alt="Blog Image"/>
                               <h5>Weddings</h5>
                               <p className='blog-p-tag'>20.04.2023 - PRESS</p>
                               <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum dignissimos doloribus eius eos illo laborum nobis quis ut? Fugit?</h5>
                           </div>
                       </div>
                        <div className='blog-card col-4'>
                            <div>
                                <img src={blogImg2} className='blog-img' alt="Blog Image"/>
                                <h5>Weddings</h5>
                                <p className='blog-p-tag'>20.04.2023 - PRESS</p>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum dignissimos doloribus eius eos illo laborum nobis quis ut? Fugit?</h5>
                            </div>
                        </div>
                        <div className='blog-card col-4'>
                            <div>
                                <img src={blogImg3} className='blog-img' alt="Blog Image"/>
                                <h5>Weddings</h5>
                                <p className='blog-p-tag'>20.04.2023 - PRESS</p>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum dignissimos doloribus eius eos illo laborum nobis quis ut? Fugit?</h5>
                            </div>
                        </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between' style={{marginTop:'20px',width:'92%'}}>
                            <div className='load-bar'>
                                <div className='inner-load-bar'>
                                </div>
                            </div>
                            <Link to='/' className='view-all' style={{textDecoration:'none',fontSize:"15px",color:"black"}}><FaArrowRight/>View All</Link>
                        </div>
                        </div>
                    </div>
            </div>
            <Footer/>
        </div>
    )
}