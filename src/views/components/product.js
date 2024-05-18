import React from "react";

class Product extends React.Component {
    render() {
        return (
            <div id="product" className="box-border w-screen h-screen text-white bg-baby-pink snap-start shrink-0 snap-always">
                <div className="w-full h-full lg:pt-28 pt-20">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-center lg:pb-8 pb-6 2xl:pb-2 text-slate-700 drop-shadow-xl lg:pt-0 px-4">So what is BabysDayOut?</h1>
                    <p className="w-full pt-0 lg:pt-2 xl:pt-4 2xl:pt-2 px-2 text-center italic drop-shadow-xl text-slate-800 md:text-base lg:text-base text-sm">It is the future of daycare... and even the children.</p>
                    <div className="grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 xl:mt-10 md:mt-6 mt-4 justify-items-center w-full bg-white drop-shadow-xl h-3/5 md:h-[70%]">
                        <p className="m-auto w-3/4 h-full text-center text-slate-700 
                                      pt-3 xxs:pt-8 xs:pt-8 md:pt-12
                                      text-sm xxs:text-base xs:text-base md:text-xl
                                      leading-relaxed xs:leading-loose md:leading-extra-loose">
                            BabysDayOut is an opportunity to revolutionize the childcare system by utiziling
                            already available infrastructure.
                            Our digital platform connects parents with trusted, local caregivers
                            in the community willing to host and look after children in the
                            perimeter & safety of their own homes.
                        </p>
                        <div className="text-slate-800 2xl:text-xl xl:text-xl md:text-xl text-sm lg:space-y-24 xl:space-y-32 xxs:mt-5 xs:mt-8
                                        lg:py-14 xl:pt-16 xl:pb-24 2xl:pb-32 2xl:pt-12 py-4 grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
                            <div className="w-3/4 mx-auto justify-items-center xl:space-y-5 2xl:space-y-3 md:space-y-8 space-y-5">
                                <div className="inline-block">
                                    <img src="/assets/check-mark.png"
                                        className="w-4 float-left lg:py-2 py-1 mx-3" />
                                    Safe & quality care
                                </div><br></br>
                                <div className="inline-block">
                                    <img src="/assets/check-mark.png"
                                        className="w-4 float-left lg:py-2 py-1 mx-3" />
                                    Highly flexible
                                </div><br></br>
                                <div className="inline-block">
                                    <img src="/assets/check-mark.png"
                                        className="w-4 float-left lg:py-2 py-1 mx-3" />
                                    More affordable
                                </div>

                            </div>
                            <div className="w-3/4 mx-auto justify-items-center xl:space-y-5 2xl:space-y-3 md:space-y-4 xl:pt-8 2xl:pt-2 sm:space-y-5 space-y-2">
                                <div className="inline-block">
                                    <img src="/assets/close.png"
                                        className="w-4 float-left lg:py-2 py-1 mx-3" />
                                    Never-ending waitlists
                                </div><br></br>
                                <div className="inline-block">
                                    <img src="/assets/close.png"
                                        className="w-4 float-left mt-5 lg:mt-4 lg:py-2 md:mt-2 py-1 mx-3" />
                                    Long commute for pick-up/drop-off
                                </div><br></br>
                                <div className="inline-block">
                                    <img src="/assets/close.png"
                                        className="w-4 float-left lg:py-2 py-1 mx-3" />
                                    Career sacrifices
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center w-3/10 2xl:pt-6 xl:pt-12 lg:pt-8 pt-4 xxs:pt-8 xs:pt-8 md:pt-10
                                     text-base hover:text-lg hover:md:text-2xl md:text-xl 
                                     hover:ease-in-out duration-300 mx-8 md:mr-4 lg:mr-0">
                        <p className="text-center float-left py-1 text-slate-700 font-medium drop-shadow-xl mr-1">Interested parents and caregivers, waitlist today!</p>
                        <a href="https://shorturl.at/lpzX1" target="_blank"><button className="bg-slate-700 float-right ml-1 px-3 py-1 md:mt-0 mt-2
                                        rounded drop-shadow-xl">
                            Register
                        </button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;