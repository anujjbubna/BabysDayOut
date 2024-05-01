import React from 'react';

class Hero extends React.Component {
    render() {
        return (
            // <div className='home-hero'>
            //     <div className='home-hero-img'>
            //         {/* <img src="/images/hero_bg.jpg" alt="images" /> */}
            //     </div>
            // </div>
            <div className='w-screen h-[calc(100vh-5rem)]'>
                <div className="bg-cover bg-[url('/images/hero_bg.jpg')] bg-center bg-no-repeat h-full w-full" >
                    <div className="container mx-auto flex flex-col my-auto align-middle h-full" >
                        <div className='my-auto  mx-auto lg:mx-0 w-10/12 lg:w-2/5 text-white'>
                            <h1 className="text-7xl mb-4">Tired of the long lines for finding childcare?</h1>
                            <p className="text-2xl mb-8">We gotchu! Introducing BabysDayOut, a platform to search for registered childcare providers.</p>
                            <div className='flex items-center'>
                                <button className='rounded px-10 py-3 text-white bg-violet-500 hover:bg-violet-600'>Learn More</button>
                                {/* <img className='pl-4 pr-2' src={icon1} /> */}
                            </div>
                        </div>
                    </div >
                </div >
            </div>
        )
    }
}

export default Hero;