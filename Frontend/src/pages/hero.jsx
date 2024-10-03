// hero page

import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
import siteLogo from "../assets/Logo/blitzquiz-logo-zip-file/logo-no-background.png";
import siteIllustration from "../assets/Images/illustration.jpg";
import Footer from "../components/footer";
const logo = siteLogo;
const illustration = siteIllustration;
function Hero() {
    return (
        <div>
            {/* Navbar */}
            <div className="w-full h-10 relative flex justify-between items-center px-24 py-11">
                {/* Logo */}
                <img src={logo} alt="logo" className="h-8" />

                {/* Login and Sign-up */}
                <div className="flex space-x-4">
                    <NavLink to="/login" className="txt-green text-xl font-montserrat flex items-center">
                        Login
                    </NavLink>
                    <div className="w-24 text-lg bg-logo-green font-montserrat flex items-center justify-center rounded-full">
                        <NavLink to="/register" className="w-full text-white text-center">
                            Sign-up
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* About us */}
            <div className="flex items-center justify-around pt-10 px-28 bg-white">
                {/* Text content */}
                <div className="w-auto ">
                    <h1 className="text-[40px] font-bold txt-dark-blue mb-4">
                        Create Quizzes in a <br />Flash with BlitzQuiz
                    </h1>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        We help teachers generate engaging  <br />
                        quizzes quickly from their teaching <br />
                        materials. With AI-powered question <br />
                        generation and automated grading, it  <br />
                        saves time and tracks student progress <br />
                        effortlessly. 
                    </p>
                </div>

                {/* Image content */}
                <div className="w-1/2">
                    <img src={illustration} alt="Illustration of student with educational tools" className="w-full h-auto" />
                </div>
            </div>

            <Footer/>

        </div>
    );
}

export default Hero;
