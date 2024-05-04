import React from "react";

class About extends React.Component {
    render() {
        return (
            <div id="about-us" className="home-about-us">
                <div className="home-heading-container1">
                    <h2 className="home-text17 Section-Heading">
                        Who are we?
                    </h2>
                    <span className="home-secondary-text Section-Text">
                        {' '}
                        Witnessing the challenges of expensive and hard-to-find daycare spots,
                        our founders envisioned a solution that would not only address the immediate needs
                        of parents but also offer substantial societal benefits. Our platform is designed
                        to empower caregivers to offer registered and safe childcare, thereby creating jobs,
                        supporting parents' transition back to work, and enhancing community health outcomes.
                        Our initiative is more than just a business; it's a movement towards improving social
                        economics by creating jobs, enabling workforce participation, and fostering
                        psychological well-being for caregivers and children alike.

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

export default About;