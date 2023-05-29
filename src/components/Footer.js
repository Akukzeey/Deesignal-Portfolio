import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div className='footer-mini-div'>
                        <h1 className='footer-heading' style={{textAlign:'start'}}>SOCIALS</h1>
                        <div style={{marginTop:'30px'}}>
                            <a className='footer-links' href="#">INSTAGRAM</a>
                            <a className='footer-links' href="#">YOUTUBE</a>
                            <a className='footer-links' href="#">TWITTER</a>
                            <a className='footer-links' href="#">FACEBOOK</a>
                        </div>
                        <hr className='footer-border '/>
                    </div>
                    <div className='footer-mini-div'>
                        <h1 className='footer-heading' style={{textAlign:'end'}}>OUR WORKS</h1>
                            <div style={{marginTop:'30px'}}>
                                <a className='footer-links' href="#">WEDDING FILMS</a>
                                <a className='footer-links' href="#">LIVE EVENT STREAMING</a>
                                <a className='footer-links' href="#">VISUAL...</a>
                                <a className='footer-links' href="#">DOCUM...</a>
                            </div>
                        <hr className='footer-border '/>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',width:'140%'}}>
                    <div className='footer-mini-div'>
                        <h1 className='footer-heading' style={{textAlign:'start'}}>Contact</h1>
                        <div style={{marginTop:'30px'}} className='d-flex'>
                            <p className='footer-links' style={{backgroundColor:'white',color:"#070745"}}>SEND A MAIL</p>
                            <p className='footer-links' href="#">INFO@DESIGNALMEDIA.COM</p>
                        </div>
                    </div>
                    <div className='footer-mini-div'>
                        <h1 className='footer-heading' style={{textAlign:'end'}}>Journals</h1>
                        <div style={{marginTop:'30px'}} className='d-flex'>
                            <p className='footer-links' style={{width:'200px',textAlign:'center'}}>Type in your email</p>
                            <p className='footer-links' style={{backgroundColor:'white',color:"#070745"}}>Subscribe</p>
                        </div>
                    </div>
                    <hr className='footer-border'/>
                </div>
                <hr/>
            </div>

            <div className='footer-end'>
                <h1 className='footer-heading row-4'>DEESIGNAL MEDIA</h1>
                <p className='row-4 footer-p-tag'>ALL RIGHTS RESERVED TO DEESIGNAL MEDIA 2023</p>
                <div className='row-4'>
                    <div>
                        <a className='footer-link-tags' href="#">What we do</a>
                        <a className='footer-link-tags' href="#">Our Works</a>
                        <a className='footer-link-tags' style={{border:'none'}} href="#">Blog</a>
                    </div>
                </div>
            </div>
        </div>

)
}