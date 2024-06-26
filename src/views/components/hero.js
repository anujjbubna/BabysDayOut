import React from 'react';

class Hero extends React.Component {
    render() {
        return (
            <div id="home" className='w-screen h-screen snap-start shrink-0 snap-always'>
                <div className="bg-cover bg-no-repeat bg-[url('/assets/hero2.jpg')] bg-center h-screen w-full" >
                    <div className="container mx-auto flex flex-col my-auto align-middle h-screen
                                        md:ml-2 lg:ml-16" >
                        <div className='my-auto  mx-auto lg:mx-0 w-10/12 lg:w-2/5 text-white'>
                            <h1 className="text-4xl mb-4 lg:text-6xl">Trouble finding quick, affordable and reliable daycare?</h1>
                            <p className="text-xl mb-8 lg:text-2xl">We gotchu! Introducing BabysDayOut, a platform to search for registered childcare providers.</p>
                            <div className='flex items-center'>
                                <a href="#product" className='rounded px-10 py-3 text-white bg-baby-blue 
                                                hover:bg-baby-pink hover:ease-in-out duration-300'>Learn More</a>
                            </div>
                        </div>
                    </div >
                </div >
            </div>
        )
    }
}

export default Hero;