import logo from '../images/Deesignal logo Icon 9.jpg'
import React from "react";
import {BiMenuAltRight} from "@react-icons/all-files/bi/BiMenuAltRight";
import {AiOutlineClose} from "@react-icons/all-files/ai/AiOutlineClose";
import './home.scss'

export default function Navbar() {
    return(
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid" style={{boxShadow:"none",height:0,}}>
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" width="60" height="55"/>
                    </a>
                    <div className='right-nav-side ml-auto'>
                        <button type="button" className="btn btn-info">BOOK US</button>
                            <BiMenuAltRight className='menu-bar' data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"/>
                        <div className="offcanvas offcanvas-end" style={{width:'100%',backgroundColor:'#09092f',overflowY:'hidden'}} tabIndex="-1" id="offcanvasRight"
                             aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                                <a className="navbar-brand" href="#">
                                    <img src={logo} alt="logo" width="60" height="55"/>
                                </a>
                                <div>
                                    <a className='social-link-tags' href="#">Instagram</a>
                                    <a className='social-link-tags' href="#">Youtube</a>
                                    <a className='social-link-tags' href="#">Twitter</a>
                                    <a className='social-link-tags' href="#">Facebook</a>
                                </div>
                                <div style={{borderRadius:'50%',height:'40px',width:'40px',backgroundColor:"grey",display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <AiOutlineClose data-bs-dismiss="offcanvas" style={{color:'white',fontSize:'30px'}}
                                        aria-label="Close"/>
                                </div>
                            </div>
                            <div className="offcanvas-body">
                                <div className='links-container'>
                                   <hr/>
                                <a className='link-tags' href='#'>WHAT WE DO</a>
                                <a className='link-tags'  href='#'>OUR WORKS</a>
                                <a className='link-tags'  href='#'>BLOG</a>
                                <a className='link-tags'  href='#'>BOOK US</a>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}