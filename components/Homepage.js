import React from "react";
import Image from 'next/image'; 
import profileImg from '../public/ProjectImages/echo.jpg';

const Hero = () => {
  return (
    <div className="home-grid flex lg:flex-row md:flex-col sm:flex-col justify-center">
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left p-20">
            <h1 className="lg:text-8xl sm:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2" style={{color: '#eab5d0'}}>
              Hi, I&apos;m Kelton!
            </h1>
            <h1 className="lg:text-7xl sm:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
              A Full Stack Web Developer in the Pacific Northwest.
            </h1>
      </div>
      <div className="w-full md:w-1/2 justify-center">
        <div className="w-3/4 mx-auto">
          <Image 
            src={profileImg} 
            alt="avatar" 
            className="profile-image"
            width='600%'
            height='400%'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero; 