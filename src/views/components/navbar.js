import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            // <div data-role="Header" className="home-navbar-container">
            //     <div className="home-navbar">
            //         <div className="home-logo">
            //             <img alt="image" src="./default-img.svg" className="home-image" /> {/* fix the image */}
            //         </div>
            //         <div className="home-links-container">
            //             <a href="#homediv" className="home-link Anchor">
            //                 Baby's Day Out
            //             </a>
            //             <a href="#about-us" className="home-link2 Anchor">
            //                 About Us
            //             </a>
            //             <a href="#services" className="home-link1 Anchor">
            //                 services
            //             </a>
            //             <a href="#contact" className="home-link3 Anchor">
            //                 contact
            //             </a>
            //         </div>
            //         {/* <div className="home-cta-container">
            //             <div data-role="BurgerMenu" className="home-burger-menu">
            //                 <svg viewBox="0 0 1024 1024" className="home-icon">
            //                     <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            //                 </svg>
            //             </div>
            //         </div> */}
            //         {/* <div data-role="MobileMenu" className="home-mobile-menu">
            //             <div className="home-top">
            //                 <img alt="image" src="/default-img.svg" className="home-image1" />
            //                 <div data-role="CloseMobileMenu" className="home-container1">
            //                     <svg viewBox="0 0 1024 1024" className="home-icon02">
            //                         <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            //                     </svg>
            //                 </div>
            //             </div>
            //             <div className="home-mid">
            //                 <div className="home-links-container1">
            //                     <a href="#features" className="home-link4 Anchor">
            //                         features
            //                     </a>
            //                     <a href="#services" className="home-link5 Anchor">
            //                         services
            //                     </a>
            //                     <a href="#about-us" className="home-link6 Anchor">
            //                         About Us
            //                     </a>
            //                     <a href="#contact" className="home-link7 Anchor">
            //                         contact
            //                     </a>
            //                 </div>
            //             </div>
            //             <div className="home-bot">
            //                 <div className="home-social-links-container">
            //                     <svg
            //                         viewBox="0 0 950.8571428571428 1024"
            //                         className="home-icon04"
            //                     >
            //                         <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            //                     </svg>
            //                     <svg
            //                         viewBox="0 0 877.7142857142857 1024"
            //                         className="home-icon06"
            //                     >
            //                         <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            //                     </svg>
            //                     <svg
            //                         viewBox="0 0 877.7142857142857 1024"
            //                         className="home-icon08"
            //                     >
            //                         <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            //                     </svg>
            //                 </div>
            //             </div>
            //         </div> */}
            //     </div>
            // </div>
            <div className="flex p-5 flex-col md:flex-row items-center 
                        fixed w-screen drop-shadow-xl">
                <a className="flex text-xl title-font font-medium items-center text-white mb-4 ml-4 md:mb-0">
                    BabysDayOut
                    {/* <img src={logo} className="w-100 h-10 mr-2" alt="Logo" /> */}
                </a>
                {/* add hrefs to the buttons below */}
                <nav className="md:ml-auto flex flex-wrap items-center mr-4
                              text-white justify-center font-medium">
                    <a className="text-base mr-5 hover:text-red-300 hover:ease-in-out duration-300">Home</a>
                    <a className="text-base mr-5 hover:text-blue-400 hover:ease-in-out duration-300">Product</a>
                    <a className="text-base mr-5 hover:text-red-300 hover:ease-in-out duration-300">Features</a>
                    <a className="text-base mr-5 hover:text-blue-400 hover:ease-in-out duration-300">About Us</a>
                    <a className="text-base mr-5 hover:text-red-300 hover:ease-in-out duration-300">Contact Us</a>
                </nav>
                {/* <div className='flex mt-4 md:mt-0'>
                    <img className='pr-4' src={search} />
                    <img src={profile} />
                </div> */}
            </div>
        )
    }
}

export default Navbar;