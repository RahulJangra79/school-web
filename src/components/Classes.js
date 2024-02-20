import React from "react";
import "./Classes.css"

const Classes = () => {
    return(
       <div className="main">
            <div className="heading1">Our Classes</div>
            <div className="text-class">Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet. Nulla sagittis faucibus lacus</div>
       
            <div className="cards">
                <div className="box">
                    <div className="pic1"></div> 
                    <button><i class="fa-solid fa-cart-shopping"></i></button>     
                    <h2>Environmental Studies & Earth Sciences</h2>
                    <p className="date">Mon-Fri 10 AM - 12 AM</p>
                    <p className="pic-text"><span>Marge Jutten</span><span className="dollar">$67</span></p>
                </div>
                <div className="box">
                    <div className="pic2"></div>
                    <button><i class="fa-solid fa-cart-shopping"></i></button>
                    <h2>Hospitality,Leisure & Sports Courses</h2>
                    <p className="date">Mon-Fri 10 AM - 12 AM</p>
                    <p className="pic-text"><span>Hubert Franck</span><span className="dollar">$67</span></p>
                </div>
                <div className="box">
                    <div className="pic3"></div>
                    <button><i class="fa-solid fa-cart-shopping"></i></button>
                    <h2>Basic English Speaking and Grammer</h2>
                    <p className="date">Mon-Fri 10 AM - 12 AM</p>
                    <p className="pic-text"><span>Amanda Kern</span><span className="dollar">$67</span></p>
                </div>
                <div className="box">
                    <div className="pic4"></div>
                    <button><i class="fa-solid fa-cart-shopping"></i></button>
                    <h2>Natural Sciences & Mathematical Courses</h2>
                    <p className="date">Mon-Fri 10 AM-12 AM</p>
                    <p className="pic-text"><span>Gypsy Hardinge</span><span className="dollar">$67</span></p>
                </div>
            </div>
        
            <div className="last-div">
                <i class="fa-solid fa-arrow-right"></i>
                Classes
            </div>
       
       </div>
    )
}

export default Classes