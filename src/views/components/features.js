import React from "react";

class Features extends React.Component {
  render() {
    return (
      <div
        id="features"
        className="box-border w-screen h-screen text-white bg-baby-blue snap-start shrink-0 snap-always"
      >
        <div className="w-full h-full xl:pt-28 pt-20">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl text-center xl:pb-8 pb-2 2xl:pb-2 text-white drop-shadow-xl lg:pt-0 px-4">
            Perks we offer
          </h1>
          <p className="w-full pt-0 lg:pt-2 xl:pt-4 2xl:pt-2 px-2 text-center italic drop-shadow-xl text-white lg:text-base text-sm">
            Other than chocolates, of course :P
          </p>
          <div className="grid justify-items-center grid-cols-2 auto-cols-auto sm:ml-8 ml-10 sm:mr-14 mr-10 pt-4 xl:pt-10 h-3/5">
            <div
              className="grid justify-items-center grid-cols-1 lg:grid-cols-2 grid-flow-row lg:grid-rows-1 sm:ml-8 sm:mr-4 rounded-xl text-slate-600
                                       border-2 border-slate-400 bg-slate-100 drop-shadow-md auto-rows-auto
                                       hover:drop-shadow-xl xl:h-5/6 md:h-full h-5/6 sm:h-2/3 sm:pb-48 sm:mt-4 md:pb-0 pb-44"
            >
              <div className="lg:h-full sm:h-full w-full">
                <img
                  alt="image"
                  src="/images/parentchild.jpg"
                  className="w-full h-36 lg:h-full lg:rounded-l-lg lg:rounded-r-none rounded-t-lg object-cover"
                />
              </div>

              <div className="text-sm sm:text-xl lg:text-sm xl:text-xl px-2 sm:px-5 text-left flex flex-col lg:pb-8 pb-0  ">
                <span className="text-lg md:text-3xl sm:text-2xl lg:text-xl 2xl:text-2xl mb-3 2xl:mb-0 pt-4 sm:pt-6 lg:pt-8 xl:pt-12 2xl:pt-8 md:pb-8 pb-0 2xl:pb-4 xl:pb-8 lg:pb-6 text-center ">
                  For Parents & Children
                </span>
                <div className="h-full">
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                    <img
                      src="/images/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-3"
                    ></img>
                    <span className="">
                      Standard government inspection for caregivers
                    </span>
                    <br></br>
                  </span>
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                    <img
                      src="/images/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-1"
                    ></img>
                    <span className="pr-1">Meet the caregiver before</span>
                    <br></br>
                  </span>
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                    <img
                      src="/images/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-3"
                    ></img>
                    <span className="pr-1">
                      Filters include location, price, and ratings
                    </span>
                    <br></br>
                  </span>
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                    <img
                      src="/images/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-3"
                    ></img>
                    <span className="pr-1">Seemless appointment booking</span>
                    <br></br>
                  </span>
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                    <img
                      src="/images/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-3"
                    ></img>
                    <span className="pr-1">
                      Daily, weekly, or monthly plans
                    </span>
                    <br></br>
                  </span>
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2s">
                    <img
                      src="/images/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-3"
                    ></img>
                    <span className="pr-1 sm:mb-4">
                      Integrated payments system
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="grid justify-items-center grid-cols-1 lg:grid-cols-2 grid-flow-row lg:grid-rows-1 sm:ml-4 sm:mr-8 rounded-xl text-slate-600
              border-2 border-slate-400 bg-slate-100 drop-shadow-md auto-rows-auto
              hover:drop-shadow-xl xl:h-5/6 md:h-full h-5/6 sm:h-2/3 sm:pb-48 sm:mt-4 md:pb-0 pb-44"
            >
              <div className="lg:h-full sm:h-full w-full">
                <img
                  alt="image"
                  src="/images/provider.jpg"
                  className="w-full h-36 lg:h-full lg:rounded-l-lg lg:rounded-r-none rounded-t-lg object-cover"
                />
              </div>
              <div className="text-sm sm:text-xl lg:text-sm xl:text-xl pl-3 pr-1 sm:pl-5 sm:pr-5 text-left flex flex-col lg:pb-8 pb-0 ">
                <span className="text-lg md:text-3xl sm:text-2xl lg:text-xl 2xl:text-2xl mb-3 2xl:mb-0 pt-4 sm:pt-6 lg:pt-8 xl:pt-12 2xl:pt-8 md:pb-8 pb-0 2xl:pb-4 xl:pb-8 lg:pb-6 text-center xl:px-0 px-10">
                  For Caregivers
                </span>
                <span className="grid grid-flow-col auto-cols-auto mt-6 sm:mt-5 sm:mb-0 mb-2">
                  <img
                    src="/images/bricks.png"
                    className="h-6 w-6 ml-1 mr-4 mt-3"
                  ></img>
                  <span className="pr-1">Standard government inspection</span>
                  <br></br>
                </span>
                <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                  <img
                    src="/images/bricks.png"
                    className="h-6 w-6 ml-1 mr-4 mt-3"
                  ></img>
                  <span className="pr-1">
                    Onboarding & registration support
                  </span>
                  <br></br>
                </span>
                <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                  <img
                    src="/images/bricks.png"
                    className="h-6 w-6 ml-1 mr-4 mt-3"
                  ></img>
                  <span className="pr-1">Daily, weekly, or monthly plans</span>
                  <br></br>
                </span>
                <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                  <img
                    src="/images/bricks.png"
                    className="h-6 w-6 ml-1 mt-3"
                  ></img>
                  <span className="pr-1 pl-4">
                    Calendar and Income management
                  </span>
                  <br></br>
                </span>
                <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                  <img
                    src="/images/bricks.png"
                    className="h-6 w-6 ml-1 mt-1"
                  ></img>
                  <span className="pr-6 pl-2">In-built messaging tool</span>
                  <br></br>
                </span>
                <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                  <img
                    src="/images/bricks.png"
                    className="h-6 w-6 ml-1 mt-3"
                  ></img>
                  <span className="pr-1 pl-4">Integrated payment system</span>
                  <br></br>
                </span>
              </div>
            </div>
            {/* <div className="home-feature-card2">
                        <img
                            alt="image"
                            src="https://images.unsplash.com/photo-1619555241737-9c364cf1fbce?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                            className="home-image5"
                        />
                        <span className="home-heading3 Card-Heading">How</span>
                        <span className="home-text08 Card-Text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                            nisi. Nulla quis sem at nibh elementum imperdiet.
                        </span>
                    </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
