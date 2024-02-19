import React from "react";
import "./welcome.css"

const Welcome = () => {
    return(
        <div className="welcome">
            <div className="welcome-heading">
            <h1>Welcome to <span className="orange">Shelly</span></h1>
            <p>Nunc consectetur ex nunc, id porttitor leo semper eget. 
                Vivamus interdum, mauris quis cursus sodales, urn</p>
            </div>

            <div className="box">
                <div className="content">
                    <i class="fa-solid fa-graduation-cap orange"></i>
                    <h2>Awesome Teachers</h2>
                    <p>Vivamus interdum, mauris interdum quis curdum sodales</p>
                </div>

                <div className="content">
                    <i class="fa-solid fa-chalkboard-user blue"></i>
                    <h2>Global Certificate</h2>
                    <p>Pelleneget tespharetra que fringilla egugue id eget pharetra</p>
                </div>

                <div className="content">
                <i class="fa-solid fa-atom orange"></i>
                <h2>Best Programm</h2>
                <p>Etiam risus neque, volutpat vel laoreet a, finibus volutpat non</p>
                </div>

                <div className="content">
                <i class="fa-solid fa-headset blue"></i>
                <h2>Student Support Service</h2>
                <p>Mauris nec mi fequis ugiat, cursus tortor nec, pharetra tellus</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome