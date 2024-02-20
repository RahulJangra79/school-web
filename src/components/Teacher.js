import React from "react";
import "./teacher.css"

const Teacher = () => {
    return(
        <div className="main">
            <div className="heading">
                Our Awesome Teachers
            </div>
            <div className="text">Quisque id ultrices tellus, ac sodales ex. Cras nec ante viverra, bibendum justo eget, lacinia dui. Donec ligula ligula, elementum sit amet</div>


            <div className="image">
                <div className="img1">
                    <p>Polina Kerston</p>
                    <a href="#">English Teacher</a>
                    <button><i class="fa-solid fa-plus"></i></button>
                </div>
                <div className="img2">
                    <p>Faadi Al Rahman</p>
                    <a href="#">Instructor</a>
                    <button><i class="fa-solid fa-plus"></i></button>
                </div>
                <div className="img3">
                    <p>Chikelu Obasea</p>
                    <a href="#">Art Teacher</a>
                     <button><i class="fa-solid fa-plus"></i></button>
                </div>
                <div className="img4">
                    <p>Katayama Fumiki</p>
                    <a href="#">Teacher</a>
                    <button><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>


            <div className="course">Find Your Course</div>
            <div className="text2">ullam fringilla ipsum sed enim scelerisque, ac porttitor libero egestas. Donec iaculis nisi eget bibendum efficitur. Lorem ipsum dolor sit</div>
            <div className="call"><i class="fa-solid fa-phone"></i>Call: +2 342 5446 67</div>
                            
            <div className="second">
                <div className="image2"></div>
                <div className="review">
                    <div className="review1">
                        <div className="first-line">
                            <div className="first-line-left">
                                <div>
                                    <p><i class="fa-solid fa-calendar-days"></i></p>
                                </div>
                                <div>
                                    <p>29/07/2020</p>
                                </div>
                                <div>
                                    <p>11AM to 15PM</p>
                                </div>
                            </div>
                            <div className="cost">
                                <p>FREE</p>
                            </div>
                        </div>                        
                        <div className="second-line">Digital Transformation Conference</div>
                        <div className="third-line">
                            <div  className="small-image">
                                <span>Amanda Keren</span>
                            </div>
                            <div className="address">
                                    <i class="fa-solid fa-location-dot"></i>
                                    43 castle road 517 district
                            </div>
                        </div>
                    </div>

                    <div className="review2">
                        <div className="first-line">
                            <div className="first-line-left">
                                <div>
                                    <p><i class="fa-solid fa-calendar-days"></i></p>
                                </div>
                                <div>
                                    <p>29/07/2020</p>
                                </div>
                                <div>
                                    <p>11AM to 15PM</p>
                                </div>
                            </div>
                            <div className="cost">
                                <p>FREE</p>
                            </div>
                        </div>                        
                        <div className="second-line">Digital Transformation Conference</div>
                        <div className="third-line">
                            <div  className="small-image">
                                <span>Amanda Keren</span>
                            </div>
                            <div className="address">
                                    <i class="fa-solid fa-location-dot"></i>
                                    43 castle road 517 district
                            </div>
                        </div>
                    </div>

                    <div className="review3">
                        <div className="first-line">
                            <div className="first-line-left">
                                <div>
                                    <p><i class="fa-solid fa-calendar-days"></i></p>
                                </div>
                                <div>
                                    <p>29/07/2020</p>
                                </div>
                                <div>
                                    <p>11AM to 15PM</p>
                                </div>
                            </div>
                            <div className="cost">
                                <p>FREE</p>
                            </div>
                        </div>                        
                        <div className="second-line">Digital Transformation Conference</div>
                        <div className="third-line">
                            <div  className="small-image">
                                <span>Amanda Keren</span>
                            </div>
                            <div className="address">
                                    <i class="fa-solid fa-location-dot"></i>
                                    43 castle road 517 district
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-last">ALL EVENTS<i class="fa-solid fa-arrow-right"></i></div>

        </div>
    )
}

export default Teacher