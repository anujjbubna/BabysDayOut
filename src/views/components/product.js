import React from "react";

class Product extends React.Component {
    render() {
        return (
            <div id="product" className="w-screen h-screen text-white bg-baby-blue">
                <div className="w-full h-full">
                    <h1 className="text-7xl text-center pt-28 pb-8 text-white drop-shadow-xl">So what is BabysDayOut?</h1>
                    <p className="w-full pt-4 text-center italic drop-shadow-xl">It is the future of daycare... and even the children.</p>
                    <div className="grid grid-cols-2 mt-16 justify-items-center w-full bg-white drop-shadow-xl">
                        {/* <div></div> */}
                        <p className="text-center text-2xl leading-extra-loose px-10 w-4/5 py-14 text-slate-700">
                            BabysDayOut is an opportunity to revolutionize the childcare system by utiziling
                            already available infrastructure.
                            Our digital platform connects parents with trusted, local caregivers
                            in the community willing to host and look after children in the
                            perimeter & safety of their own homes.
                            {/* making daycare accessible, flexible, and transparent. */}
                            {/* This means no more never-ending waitlists, no long commutes for pick-up/drop-off,
                            and no career sacrifices.  */}
                        </p>
                        {/* <p>
                            
                        </p> */}
                        <ul className="text-slate-800 text-xl leading-extra-loose
                                        py-14">
                            {/* Add cross symbol and remove NOs */}
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
                                    Long community for pick-up/drop-off
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
                </div>
            </div>
        )
    }
}

export default Product;