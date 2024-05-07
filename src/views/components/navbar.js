import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <div className="flex p-5 flex-col md:flex-row items-center 
                        fixed w-screen drop-shadow-xl z-[1]">
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
            </div>
        )
    }
}

export default Navbar;