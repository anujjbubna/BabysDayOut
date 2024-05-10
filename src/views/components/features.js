import React from "react";

class Features extends React.Component {
    render() {
        return (
            <div id="features" className="w-full h-screen bg-baby-pink snap-start shrink-0 snap-always pb-48">
                {/* <div className="h-full w-full bg-gradient-to-r from-blue-200 to-red-200"> */}
                <div className="h-full w-full pt-24">
                    <h1 className="text-7xl text-center pb-8 text-white drop-shadow-xl">Perks we offer</h1>
                    <p className="w-full pt-4 text-center italic drop-shadow-xl text-white">Other than chocolates, of course :P</p>
                    <div className="grid justify-items-center grid-cols-2 auto-cols-auto h-3/5 ml-8 mr-14 mt-16">
                        <div className="grid justify-items-center grid-cols-2 ml-8 mr-4 rounded-xl text-slate-600
                                       border-2 border-slate-400 bg-slate-100 drop-shadow-md
                                       hover:drop-shadow-xl">
                            <img
                                alt="image"
                                src="/images/parentchild.jpg"
                                className="w-full h-full rounded-l-lg"
                            />
                            <div className="text-xl px-5 text-left flex flex-col space-y-4 pb-8">
                                <span className="text-3xl mb-3 pt-12 pb-8 text-center">For Parents & Children </span>
                                <span className="grid grid-flow-col auto-cols-auto">
                                    <img src="/images/bricks.png" className="h-6 w-6 ml-1 mr-4 mt-3"></img> 
                                    <span className="">Standard government inspection for caregivers</span>
                                    <br></br>
                                </span>
                                <span className="grid grid-flow-col auto-cols-auto">
                                    <img src="/images/bricks.png" className="h-6 w-6 ml-1 mr-4 mt-1"></img> 
                                    <span className="pr-1">Meet the caregiver before</span>
                                    <br></br>
                                </span>
                                <span className="grid grid-flow-col auto-cols-auto">
                                    <img src="/images/bricks.png" className="h-6 w-6 ml-1 mr-4 mt-3"></img> 
                                    <span className="pr-1">Filters include location, price, and ratings </span>
                                    <br></br>
                                </span>
                                <span className="grid grid-flow-col auto-cols-auto">
                                    <img src="/images/bricks.png" className="h-6 w-6 ml-1 mr-4 mt-3"></img> 
                                    <span className="pr-1">Seemless appointment booking</span>
                                    <br></br>
                                </span>
                                <span className="grid grid-flow-col auto-cols-auto">
                                    <img src="/images/bricks.png" className="h-6 w-6 ml-1 mr-4 mt-3"></img> 
                                    <span className="pr-1">Daily, weekly, or monthly plans</span>
                                    <br></br>
                                </span>
                                <span className="grid grid-flow-col auto-cols-auto">
                                    <img src="/images/bricks.png" className="h-6 w-6 ml-1 mr-4 mt-3"></img> 
                                    <span className="pr-1">Integrated payments system</span>
                                    <br></br>
                                </span>
                            </div>
                        </div>
                        <div className="grid justify-items-center grid-cols-2 ml-4 mr-4 rounded-xl text-slate-600
                                        border-2 border-slate-400 bg-slate-100 drop-shadow-md
                                        hover:drop-shadow-xl">
                            <img
                                alt="image"
                                src="/images/provider.jpg"
                                className="w-full h-full rounded-l-lg object-cover"
                            />
                            <div className="text-xl px-5 pr-10 flex flex-col space-y-5 pt-5 pb-8">
                                <span className="text-3xl text-center mb-3 pb-6 pt-12">For Caregiver</span>
                                <span className="grid grid-flow-col auto-cols-auto">
                                    <img src="/images/bricks.png" className="h-6 w-6 ml-1 mr-4 mt-3"></img> 
                                    <span className="pr-1">Standard government inspection</span>
                                    <br></br>
                                </span>
                                <span className="grid grid-flow-col auto-cols-auto">
                                    <img src="/images/bricks.png" className="h-6 w-6 ml-1 mr-4 mt-3"></img> 
                                    <span className="pr-1">Onboarding & registration support</span>
                                    <br></br>
                                </span>
                                <span className="grid grid-flow-col auto-cols-auto">
                                    <img src="/images/bricks.png" className="h-6 w-6 ml-1 mr-4 mt-3"></img> 
                                    <span className="pr-1">Daily, weekly, or monthly plans</span>
                                    <br></br>
                                </span>
                                <span className="grid grid-flow-col auto-cols-auto">
                                    <img src="/images/bricks.png" className="h-6 w-6 ml-1 mt-3"></img> 
                                    <span className="pr-1 pl-4">Calendar and Income management</span>
                                    <br></br>
                                </span>
                                <span className="grid grid-flow-col auto-cols-auto">
                                    <img src="/images/bricks.png" className="h-6 w-6 ml-1 mt-1"></img> 
                                    <span className="pr-6 pl-2">In-built messaging tool</span>
                                    <br></br>
                                </span>
                                <span className="grid grid-flow-col auto-cols-auto">
                                    <img src="/images/bricks.png" className="h-6 w-6 ml-1 mt-3"></img> 
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
        )
    }
}

export default Features;