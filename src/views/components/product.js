import React from "react";

class Product extends React.Component {
    render() {
        return (
            <div id="product" className="box-border w-screen h-screen text-white bg-baby-blue snap-start shrink-0 snap-always">
                <div className="w-full h-full pt-28">
                    <h1 className="text-7xl text-center pb-8 text-white drop-shadow-xl">So what is BabysDayOut?</h1>
                    <p className="w-full pt-4 text-center italic drop-shadow-xl text-white">It is the future of daycare... and even the children.</p>
                    <div className="grid grid-cols-2 mt-16 justify-items-center w-full bg-white drop-shadow-xl">
                        <p className="text-center text-2xl leading-extra-loose pr-10 pl-16 w-4/5 py-14 text-slate-700">
                            BabysDayOut is an opportunity to revolutionize the childcare system by utiziling
                            already available infrastructure.
                            Our digital platform connects parents with trusted, local caregivers
                            in the community willing to host and look after children in the
                            perimeter & safety of their own homes.
                        </p>
                        {/* <p>
                            
                        </p> */}
                        <ul className="text-slate-800 text-xl leading-extra-loose
                                        py-14">
                            <li>
                                <div className="inline-block">
                                    <img src="/images/check-mark.png"
                                        className="w-4 float-left py-3 mx-3" />
                                    Safe & quality care
                                </div>
                            </li>
                            <li>
                                <div className="inline-block">
                                    <img src="/images/check-mark.png"
                                        className="w-4 float-left py-3 mx-3" />
                                    Highly flexible
                                </div>
                            </li>
                            <li>
                                <div className="inline-block">
                                    <img src="/images/check-mark.png"
                                        className="w-4 float-left py-3 mx-3" />
                                    More affordable
                                </div>
                            </li>
                            <br></br>
                            <li>
                                <div className="inline-block">
                                    <img src="/images/close.png"
                                        className="w-4 float-left py-3 mx-3" />
                                    Never-ending waitlists
                                </div>
                            </li>
                            <li>
                                <div className="inline-block">
                                    <img src="/images/close.png"
                                        className="w-4 float-left py-3 mx-3" />
                                    Long commute for pick-up/drop-off
                                </div>
                            </li>
                            <li>
                                <div className="inline-block">
                                    <img src="/images/close.png"
                                        className="w-4 float-left py-3 mx-3" />
                                    Career sacrifices
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center w-3/10 pt-16
                                     text-xl hover:text-2xl hover:ease-in-out duration-300">
                        <p className="float-left pl-4 py-1 text-slate-700 font-medium drop-shadow-xl">Interested parents and caregivers, waitlist today!</p>
                        <a href="https://shorturl.at/lpzX1" target="_blank"><button className="bg-slate-700 float-right px-3 ml-4 py-1
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