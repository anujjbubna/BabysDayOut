import React from "react";

class Features extends React.Component {
    render() {
        return (
            <div id="features" className="page w-screen h-screen">
                {/* <div className="h-full w-full bg-gradient-to-r from-blue-200 to-red-200"> */}
                <div className="h-full w-full bg-baby-pink">
                    {/* <div className="flex justify-center py-10 w-full">
                        <div className="flex">
                            <img src="/images/perk.jpeg" className="w-15"></img>
                        </div>
                        <div className="flex justify-center">
                            <h2 className="text-4xl">we offer</h2>
                        </div>
                    </div> */}
                    <h2 className="text-4xl font-semibold text-center pt-16 pb-8 text-white drop-shadow-xl">Perks we offer</h2>
                    <div className="grid justify-items-center grid-cols-2 auto-cols-auto h-4/5 mx-8">
                        <div className="grid justify-items-center grid-cols-2 ml-8 mr-4 rounded-xl text-slate-600
                                       border-2 border-slate-100 bg-slate-100 hover:drop-shadow-xl">
                            <img
                                alt="image"
                                src="/images/parentchild.jpg"
                                className="w-full h-full rounded-l-xl"
                            />
                            <div className="text-lg  px-5 text-center flex flex-col space-y-5">
                            <span className="text-3xl mb-3 pt-24 pb-8">For Parents & Children </span>
                                <span className="">
                                    - Standard govt inspection for caregiver
                                    <br></br>
                                </span>
                                <span className="">
                                    - Safe and quality care
                                    <br></br>
                                </span>
                                <span className="">
                                    - Search for caregivers based on location, price, ratings, etc.
                                    <br></br>
                                </span>
                                <span className="">
                                    - Seemless appointment booking
                                    <br></br>
                                </span>
                                <span className="">
                                    - Daily, weekly, or monthly plans
                                    <br></br>
                                </span>
                                <span className="">
                                    - Multiple children management
                                    <br></br>
                                </span>
                                <span className="">
                                    - Messaging tool
                                    <br></br>
                                </span>
                                <span className="">
                                    - Integrated payment system
                                    <br></br>
                                </span>
                            </div>
                        </div>
                        <div className="grid justify-items-center grid-cols-2 ml-4 mr-4 rounded-xl text-slate-600
                                        border-2 border-slate-100 bg-slate-100 hover:drop-shadow-xl">
                            <img
                                alt="image"
                                src="/images/nanny.jpg"
                                className="w-full h-full rounded-l-xl"
                            />
                            <div className="text-lg px-5 text-center flex flex-col space-y-8">
                            <span className="text-4xl mb-3 pb-8 pt-24">For Caregiver</span>
                                <span className="">
                                    - Standard government inspection
                                    <br></br>
                                </span>
                                <span className="">
                                    - Onboarding & registration support
                                    <br></br>
                                </span>
                                <span className="">
                                    - Daily, weekly, or monthly plans
                                    <br></br>
                                </span>
                                <span className="">
                                    - Calendar and Income management
                                    <br></br>
                                </span>
                                <span className="">
                                    - Messaging tool
                                    <br></br>
                                </span>
                                <span className="">
                                    - Integrated payment system
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