import React from "react";

class Features extends React.Component {
  render() {
    return (
      <div
        id="features"
        className="box-border w-screen h-screen text-white bg-baby-blue snap-start shrink-0 snap-always"
      >
        <div className="h-full grid grid-flow-ro auto-rows-min">
          <div className="h-[20vh] pt-[8vh]">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl text-center pb-2 text-white drop-shadow-xl lg:pt-0 px-4">
              Perks we offer
            </h1>
            <p className="w-full text-center italic drop-shadow-xl text-white lg:text-base text-sm">
              Other than chocolates, of course :P
            </p>
          </div>
          <div className="h-[80vh] grid justify-items-center grid-rows-2 md:grid-cols-2 sm:ml-8 ml-10 sm:mr-14 mr-10 pt-4 xl:pt-10">
            <div
              className="grid justify-items-center grid-cols-2 md:grid-cols-1 lg:grid-cols-2 md:grid-flow-row lg:grid-rows-1 sm:ml-8 sm:mr-4 rounded-xl text-slate-600
                                       border-2 border-slate-400 bg-slate-100 drop-shadow-md auto-rows-auto
                                       hover:drop-shadow-xl  sm:mt-4 md:pb-0 h-[35vh] md:h-[70vh]"
            >
              <div className="h-full w-full">
                <img
                  alt="image"
                  src="/assets/parentchild.jpg"
                  className="w-full h-full md:h-[18vh] lg:h-full lg:rounded-l-lg lg:rounded-r-none rounded-l-lg md:rounded-t-lg md:rounded-b-none object-cover"
                />
              </div>

              <div className="h-[95%] w-full text-wrap grid grid-flow-row grid-rows-min xl:text-xl px-2 sm:px-5 text-left lg:pb-8 pb-0 overflow-y-auto ">
                <span className="text-lg md:text-xl sm:text-lg lg:text-xl 2xl:text-2xl mb-3 2xl:mb-0 pt-4 sm:pt-6 lg:pt-8 xl:pt-12 2xl:pt-8 md:pb-8 pb-0 2xl:pb-4 xl:pb-8 lg:pb-6 text-center ">
                  For Parents & Children
                </span>
                <div className="grid grid-flow-row auto-row-min text-md md:text-lg sm:text-base lg:text-lg 2xl:text-xl overflow-y-auto">
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                    <img
                      src="/assets/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-3"
                    ></img>
                    <span className="pr-1">
                      Standard government inspection for caregivers
                    </span>
                    <br></br>
                  </span>
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                    <img
                      src="/assets/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-1"
                    ></img>
                    <span className="pr-1">Meet the caregiver before</span>
                    <br></br>
                  </span>
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                    <img
                      src="/assets/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-3"
                    ></img>
                    <span className="pr-1">
                      Filters include location, price, and ratings
                    </span>
                    <br></br>
                  </span>
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                    <img
                      src="/assets/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-3"
                    ></img>
                    <span className="pr-1">Seemless appointment booking</span>
                    <br></br>
                  </span>
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                    <img
                      src="/assets/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-3"
                    ></img>
                    <span className="pr-1">
                      Daily, weekly, or monthly plans
                    </span>
                    <br></br>
                  </span>
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2s">
                    <img
                      src="/assets/bricks.png"
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
              className="grid justify-items-center grid-cols-2 md:grid-cols-1 lg:grid-cols-2 md:grid-flow-row lg:grid-rows-1 sm:ml-8 sm:mr-4 rounded-xl text-slate-600
              border-2 border-slate-400 bg-slate-100 drop-shadow-md auto-rows-auto
              hover:drop-shadow-xl  sm:mt-4 md:pb-0 h-[35vh] md:h-[70vh]"
            >
              <div className="h-full w-full">
                <img
                  alt="image"
                  src="/assets/provider.jpg"
                  className="w-full h-full md:h-[18vh] lg:h-full lg:rounded-l-lg lg:rounded-r-none rounded-l-lg md:rounded-t-lg md:rounded-b-none object-cover"
                />
              </div>
              <div className="h-[95%] w-full text-wrap grid grid-flow-row grid-rows-min px-2 sm:px-5 text-left lg:pb-8 pb-0 overflow-y-auto ">
                <span className="text-lg md:text-xl sm:text-lg lg:text-xl 2xl:text-2xl mb-3 2xl:mb-0 pt-4 sm:pt-6 lg:pt-8 xl:pt-12 2xl:pt-8 md:pb-8 pb-0 2xl:pb-4 xl:pb-8 lg:pb-6 text-center">
                  For Caregivers
                </span>
                <div className="grid grid-flow-row auto-row-min text-md md:text-lg sm:text-base lg:text-lg 2xl:text-xl overflow-y-auto">
                  <span className="grid grid-flow-col auto-cols-auto mt-6 sm:mt-5 sm:mb-0 mb-2">
                    <img
                      src="/assets/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-3"
                    ></img>
                    <span className="pr-1">Standard government inspection</span>
                    <br></br>
                  </span>
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                    <img
                      src="/assets/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-3"
                    ></img>
                    <span className="pr-1">
                      Onboarding & registration support
                    </span>
                    <br></br>
                  </span>
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                    <img
                      src="/assets/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-3"
                    ></img>
                    <span className="pr-1">Daily, weekly, or monthly plans</span>
                    <br></br>
                  </span>
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                    <img
                      src="/assets/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-3"
                    ></img>
                    <span className="pr-1">
                      Calendar and Income management
                    </span>
                    <br></br>
                  </span>
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                    <img
                      src="/assets/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-3"
                    ></img>
                    <span className="pr-6">In-built messaging tool</span>
                    <br></br>
                  </span>
                  <span className="grid grid-flow-col auto-cols-auto sm:mb-0 mb-2">
                    <img
                      src="/assets/bricks.png"
                      className="h-6 w-6 ml-1 mr-4 mt-3"
                    ></img>
                    <span className="pr-1 sm:mb-4">Integrated payment system</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
