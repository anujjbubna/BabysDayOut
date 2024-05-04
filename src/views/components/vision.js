import React from "react";

class Vision extends React.Component {
    render () {
        return (
            <div id="vision" className="w-screen h-[calc(100vh-5rem)] ">
                <div className="bg-cover bg-center bg-no-repeat h-full w-full">
                    <h1 className="text-4xl">
                        <span>
                            Our Vision
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: ' ',
                                }}
                            />
                        </span>
                        <br></br>
                    </h1>
                    <span className="home-text03 Section-Text">
                        Unlock the future of daycare and discover a new era of childcare that fits your life.
                        Our digital platform connects you with trusted,
                        local caregivers in your community, making daycare accessible, flexible, and transparent.
                        At BabysDayOut, we believe that access to quality child care is a cornerstone of a thriving community.
                        Our mission is to bridge the gap between parents seeking affordable, reliable daycare and individuals
                        willing to provide loving care in their homes. Your child's safety is our top priority.
                        We've implemented a multi-pronged safety approach,
                        ensuring that all caregivers meet the highest standards of safety vetting, similar to
                        licensed daycare facilities.
                    </span>
                </div>
            </div>
        )
    }
}

export default Vision;