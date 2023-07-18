import React, { useEffect, useRef, useState } from 'react';
import image from '../../assets/image/cuberto-logo-vector.png';

const Headerpage = () => {
  const [navWidth, setNavWidth] = useState("0%");

  const openNav = () => {
    setNavWidth("50%");
  };

  const closeNav = () => {
    setNavWidth("0%");
  };
  const ballRef = useRef(null);
  const ballBrothersRef = useRef(null);
  const [dods, setDods] = useState([  ]);

  useEffect(() => {
    const ballDesktopHandle = (e) => {
      const ball = ballRef.current;
      const ballBrothers = ballBrothersRef.current;
      const [x, y] = [e.clientX, e.clientY];
      const [w, h] = [ball.offsetWidth, ball.offsetHeight];
      ball.style.left = x - w / 2 + 'px';
      ball.style.top = y - h / 2 + 'px';
      setDods((prevDods) => {
        const newDods = [...prevDods, `${x + 10}px ${y + 10}px 20px -5px rgb(0,255,0)`];
        return newDods.length > 20 ? newDods.slice(1) : newDods;
      });
    };

    const ballPhoneHandle = (e) => {
      const ball = ballRef.current;
      const ballBrothers = ballBrothersRef.current;
      const [x, y] = [e.touches[0].clientX, e.touches[0].clientY];
      const [w, h] = [ball.offsetWidth, ball.offsetHeight];
      ball.style.left = x - w / 2 + 'px';
      ball.style.top = y - h / 2 + 'px';
      setDods((prevDods) => {
        const newDods = [...prevDods, `${x + 10}px ${y + 10}px 20px -5px rgb(0,255,0)`];
        return newDods.length > 20 ? newDods.slice(1) : newDods;
      });
    };

    const timer = setTimeout(() => {
      setDods((prevDods) => {
        const newDods = [...prevDods];
        if (newDods.length > 1) {
          newDods.shift();
        }
        return newDods;
      });
    }, 20);

    document.addEventListener('mousemove', ballDesktopHandle);
    document.body.addEventListener('touchmove', ballPhoneHandle);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', ballDesktopHandle);
      document.body.removeEventListener('touchmove', ballPhoneHandle);
    };
  }, []);

  return (
    <div>
      <div className="ball-brothers" ref={ballBrothersRef}></div>
      <div className="ball" ref={ballRef}></div>
      <div className="flex  px-15 sm:px-20 sm:py-10 py-[0.5rem] relative  justify-between ">
        <img src={image} className=" w-[25%] sm:w-[14%]   lg:w-[8%] h-[5%] flex p-3" alt="Logo" />
      
        {/* <h4 className='text-xl flex  '>our showreel</h4> */}
        <div id="myNav" className="overlay " style={{ width: navWidth }}>
        <button className="closebtn" onClick={closeNav}>&times;</button>
                  <div className="cubemain "></div>
          <div className="overlay-content  ">
            <div className="nav-wrapper flex">
            <div className="social text-[30px] sm:block hidden text-[#000] px-16 py-8 text-left ">
              <span className='text-[#aba8a8]    text-[20px]'>social </span>
              <a className='.hover-this ' href="#"> <span>linkedIn</span></a>
              <a className='.hover-this ' href="#"> <span>Behance</span></a>
              <a className='.hover-this ' href="#"> <span>dribble</span></a>
              <a className='.hover-this ' href="#"><span>instagram </span></a>
              <a className='.hover-this ' href="#"><span>youtube</span></a>
              <a className='.hover-this ' href="#"><span>Twitter</span></a>
              <a className='.hover-this ' href="#"><span>GitHub</span></a>
            </div>
            <div className="menu text-[25px]  sm:text-[50px]  px-16  sm:px-[3rem] text-left">
              <span className='text-[#aba8a8] text-[15px] sm:text-[18px]'>menu</span>
              <a className='.hover-this ' href="#"> <span>What we do</span></a>
              <a className='.hover-this ' href="#"><span>Project</span></a>
              <a className='.hover-this 'href="#"><span>Company</span></a>
              <a className='.hover-this 'href="#"><span>utorials</span></a>
              <a className='.hover-this 'href="#"><span>Contacts</span></a>
            </div>
          </div>
          </div>
          <div className="text text-[9px] sm:text-sm relative bottom-[-20%] px-24">
            <span className='text-[#aba8a8]'>get in touch</span>
            <br />
            <span>info@cuberto.com</span>
          </div>
        </div>
        <div className="extra  flex   justify-between">
        <h4 className='  m-6 text-lg  '>our showreel</h4>
        <h4 className='  m-6 text-lg  sm:block  hidden '>menu</h4>

         
        <span className='text-[20px]  sm:text-[25px]   flex  p-[25px]'   onClick={openNav}>&#9776;</span>
        
      </div>
      </div>
      
    </div>
    
  );
};

export default Headerpage;
