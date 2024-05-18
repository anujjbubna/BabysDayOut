import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div
        id="contact"
        className="box-border w-screen h-screen text-olive-green bg-pastel-green snap-start shrink-0 snap-always"
      >
        <div className="w-full h-full pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-center pb-6 2xl:pb-2 text-olive-green drop-shadow-xl lg:pt-0 px-4">
            Contact Us
          </h1>
          <form
            className=" bg-gray-50 mx-auto 2xl:mt-8 xl:mt-10 md:mt-6 mt-4 pt-4 2xl:pt-4 xl:pt-10 h-3/5 w-3/4 lg:w-1/2 
                                    rounded-lg drop-shadow-xl"
            action="https://formspree.io/f/xleqvbrd"
            method="POST"
          >
            <div className="grid grid-cols-2 mx-auto lg:w-1/2 w-5/6 mt-2 sm:mt-14 xl:mt-8 lg:mt-2 2xl:mt-0 text-center">
              <div className="m-auto w-4/5 text-sm xxs:mt-3">
                <label for="fname" className="w-full my-1 font-medium">
                  First Name
                  <input
                    className="rounded-md w-5/6 2xl:w-full text-xs text-center shadow-lg
                               mt-1 xxs:mt-2 2xl:mt-1 mb-1 px-2 py-1 
                             border-olive-green border-solid border-2"
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="First name"
                  ></input>
                </label>
                {/* add input reference and create js script */}
              </div>
              <div className="m-auto w-4/5 text-sm xxs:mt-3">
                <label for="lname" className="w-full my-1 font-medium">
                  Last Name
                  <input
                    className="rounded-md w-5/6 2xl:w-full text-xs text-center shadow-lg
                               mt-1 xxs:mt-2 2xl:mt-1 mb-1 px-2 py-1 
                             border-olive-green border-solid border-2"
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Last name"
                  ></input>
                </label>
              </div>
            </div>
            <div className="w-3/4 lg:w-2/3 px-2 lg:px-0 m-auto 
                            mt-2 xxs:mt-4 xl:mt-4 lg:mt-2 2xl:mt-2 
                            grid grid-flow-row auto-rows-auto text-sm">
              <label
                for="email"
                className="w-full lg:w-4/5 mx-auto my-1 font-medium text-center"
              >
                Email address
                <input
                  className="rounded-md w-full lg:w-5/6 text-xs text-center shadow-lg
                             mt-1 xxs:mt-2 2xl:mt-1 mb-1 px-2 py-1 
                           border-olive-green border-solid border-2"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                ></input>
              </label>
              {/* check for email input only */}
            </div>
            <div className="m-auto w-3/4 lg:w-2/3 px-2 lg:px-0 grid grid-flow-row auto-rows-auto justify-items-center 
                            mt-2 xxs:mt-4 xl:mt-4 lg:mt-2 2xl:mt-2 text-sm">
              <label
                for="query"
                className="w-full lg:w-4/5 mt-1 mb-2 font-medium text-center"
              >
                Your Query:
                <textarea
                  className="rounded-md w-full lg:w-5/6 xl:h-32 h-24 xxs:h-36 xs:h-40 mb-1 
                             mt-1 xxs:mt-2 2xl:mt-1
                             px-2 py-1 text-xs shadow-lg resize-none
                           border-olive-green border-solid border-2"
                  type="text"
                  id="query"
                  name="query"
                  placeholder="Ask us your questions..."
                ></textarea>
              </label>
              {/* limit the query to 60 words */}
            </div>
            <div className="w-16 m-auto bg-olive-green xl:mt-6 lg:mt-0 2xl:mt-0 text-white rounded-md px-1 text-center">
              <button>Submit</button>
            </div>
          </form>
          <div className="flex justify-center w-3/10 2xl:pt-6 xl:pt-12 lg:pt-8 pt-4 xxs:pt-8 xs:pt-8 md:pt-10
                                     text-base hover:text-lg hover:md:text-2xl md:text-xl 2xl:text-2xl hover:2xl:text-3xl
                                     hover:ease-in-out duration-300 mx-8 md:mr-4 lg:mr-0">
            <p className="text-center float-left py-1 text-olive-green font-medium drop-shadow-xl mr-1">Interested parents and caregivers, waitlist today!</p>
            <a href="https://shorturl.at/lpzX1" target="_blank"><button className="bg-olive-green float-right ml-1 px-3 py-1 md:mt-0 mt-2
                                        rounded drop-shadow-xl text-white">
              Register
            </button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
