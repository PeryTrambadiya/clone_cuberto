import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player';
import gsap from 'gsap'
import video from '../../assets/image/practice.mp4'

const Bannerpage = () => {
  useEffect(() => {
    const handleMouseMove = (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY
      });

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1
      });
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const handleMouseMove = (evt) => {
      const isResponsive = window.innerWidth > 450; // Set the desired responsive breakpoint

      if (!isResponsive) {
        return; // Skip GSAP animation if it's a responsive layout
      }

      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY
      });

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1
      });
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <section>
        <div className="outerpage min-h-[100vh] sm:overflow-hidden">
        
       

          <div className="cursor"></div>
          <div className="shapes">
          {/* <div class="shape shape-1"></div> */}
  <div class="shape shape-2">
    <div className="cb-hero-video hidden lg:block">

    <ReactPlayer
                url="//cdn.cuberto.com/cb/video/hero/0.mp4"
                playing={true}
                loop={true}
                muted={true}
                playsinline={true}
                // controls={true}
                width="100%"
                height="auto"
              />

    </div>
      
            </div>
            {/* <div class="shape shape-3"></div> */}
          </div>

          <div
            className="cubemain block sm:flex justify-center items-center relative "
          
          >
            <div className="abc lg:hidden">
          
            <video src={video} autoPlay loop muted />


            </div>
               <div className="container text-[20px] p-[6.75rem]   sm:p-7   px-[2rem] sm:px-[4rem]   lg:px-[10rem]  sm:bottom-[13rem]   bottom-[7rem]    lg:bottom-[17rem]   absolute  "> 
            <h1>We make it happen</h1> 
           </div> 
           <div className="media-word   font-bold underline text-[15px] sm:py-32 py-[4rem]     m-6 p-2  block  sm:hidden ">
            <h2>Website</h2>
            <h2>Application</h2>
            <h2>      Branding</h2>
           </div>
           <div className=" word  sm:flex  hidden gap-[0.75rem] lg:gap-9    m-4 p-28">
            <div className="main-text">
              <h2 className="fill " data-text="Websites">
                Websites
              </h2>
            </div>
            <div className="main-text">
              <h2 className="fill" data-text="App">
                App
              </h2>
            </div>
            <div className="main-text">
              <h2 className="fill" data-text="Branding">
                Branding
              </h2>
            </div>
            </div>
          </div>

          <div className="container     ">
            <div className="footerpage">
              <div className="text-footer  sm:text-3xl  text-[20px] lg:text-4xl m-18 sm:p-28 p-[2rem]">
                <p>
                  Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services. featured
                </p>
              </div>
              <div className="feature ml-[3rem] sm:ml-32">
                <div className="cd-feature  sm:p-28  p-[10px]">
                  <h2 className="sm:text-5xl text-4xl">featured</h2>
                  <div className="fill2">
                    <h2 >project</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bannerpage;
