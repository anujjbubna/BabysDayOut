import React from "react";

class Services extends React.Component {
    render() {
        return (
            <div id="features" className="w-screen h-[calc(100vh-5rem)]">
                {/* <div className="h-full w-full bg-gradient-to-r from-blue-200 to-red-200"> */}
                <div className="h-full w-full bg-baby-blue">
                    {/* <div className="flex justify-center py-10 w-full">
                        <div className="flex">
                            <img src="/images/perk.jpeg" className="w-15"></img>
                        </div>
                        <div className="flex justify-center">
                            <h2 className="text-4xl">we offer</h2>
                        </div>
                    </div> */}
                    <h2 className="text-4xl font-semibold text-center pt-16 pb-8 text-white">Perks we offer</h2>
                    <div className="grid justify-items-center grid-cols-2 auto-cols-auto h-4/5 px-8">
                        <div className="flex items-center flex-col w-full py-10 mr-4 rounded-xl text-white
                                        bg-cover bg-[url('/images/hero2.jpg')] bg-center bg-no-repeat">
                            {/* <img
                                alt="image"
                                src="https://images.unsplash.com/photo-1619548683455-23b17c3ddc30?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                                className="w-32"
                            /> */}
                            <span className="text-3xl mb-3 pt-24 pb-8">Parents & Children </span>
                            <div className="text-lg  px-5 text-center flex flex-col space-y-5">
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
                            </div>
                        </div>
                        <div className="flex items-center flex-col w-full py-10 ml-4 rounded-xl text-white
                                        bg-cover bg-[url('/images/hero2.jpg')] bg-center bg-no-repea">
                            {/* <img
                                alt="image"
                                src="https://images.unsplash.com/photo-1619547871672-b6562e042c1e?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                                className="w-32"
                            /> */}
                            <span className="text-4xl mb-3 pb-8 pt-24">Caregiver</span>
                            <div className="text-lg px-5 text-center flex flex-col space-y-8">
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

export default Services;