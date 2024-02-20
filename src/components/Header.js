import React from "react";
import "./header.css"

const Header = () => {
    return(
        <div className="main-page">
            <div className="header">
                <div className="header-content">
                    <div className="logo"></div>
                    <div className="contact-detail">
                        <div className="contact-phone">
                            <div className="add-icon">
                                <i class="fa-solid fa-phone orange"></i>
                                <p className="add-first">Call</p>
                            </div>
                            <p className="add-second">+2 342 5446 67</p>
                        </div>

                        <div className="contact-work-time">
                            <div className="add-icon">
                                <i class="fa-regular fa-clock orange"></i>
                                <p className="add-first">Work Time</p>
                            </div>
                            <p className="add-second">Mon - Fri 8 AM - 5 PM</p>
                        </div>

                        <div className="contact-address">
                            <div className="add-icon">
                                <i class="fa-solid fa-location-dot orange"></i>
                                <p className="add-first">Address</p>
                            </div>
                            <p className="add-second">Franklin St, Greenpoint Ave</p>
                        </div>
                    </div>
                </div>
                
                <div className="navigation-full">
                    <div className='navbar'>
                        <ul>
                            <li className='item'><a href="#">Home</a></li>
                            <li className='item'><a href="#">About</a></li>
                            <li className='item'><a href="#">Classes</a></li>
                            <li className='item'><a href="#">Teachers</a></li>
                            <li className='item'><a href="#">Blog</a></li>
                            <li className='item'><a href="#">Contacts</a></li>
                        </ul>
                    </div>
                    <div className="social-media-icon">
                        <div>
                            <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                        </div>
                        <div>
                            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                        <div>
                            <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-main">
                <div className="background-circle"></div>
                <div className="hero">
                    <div className="heading">
                        <h2>The Smarter Way to Learn <span className="orange">Anything</span></h2>
                        <p>
                            Mauris malesuada enim eget blandit gravida. Duis hendrerit cursus turpis, id mollis est 
                            rutrum nec. Sed interdum nisi id libero tincidunt, sit amet vestibulum tortor porttitor. 
                            Cras ligula lacus, ullamcorper sed
                        </p>
                        <input type="text" placeholder="Search Class"></input>
                    </div>
                    <div>
                        <div className="banner-img"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header