import React from 'react';

class Hero extends React.Component {
    render() {
        return (
            <div id="home" className='w-screen h-screen snap-start shrink-0 snap-always'>
                {/* <div className="bg-cover bg-[url('/images/hero_bg.jpg')] bg-center bg-no-repeat h-full w-full" > */}
                <div className="bg-cover bg-no-repeat bg-[url('/images/hero2.jpg')] bg-center  h-screen w-full" >
                    <div className="container mx-auto flex flex-col my-auto align-middle h-screen" >
                        <div className='my-auto  mx-auto lg:mx-0 w-10/12 lg:w-2/5 text-white'>
                            <h1 className="text-7xl mb-4">Trouble finding quick, cheap and reliable daycare?</h1>
                            <p className="text-2xl mb-8">We gotchu! Introducing BabysDayOut, a platform to search for registered childcare providers.</p>
                            <div className='flex items-center'>
                                <button className='rounded px-10 py-3 text-white bg-baby-pink 
                                                hover:bg-baby-blue hover:ease-in-out duration-300'>Learn More</button>
                            </div>
                        </div>
                    </div >
                </div >
            </div>
        )
    }
}

export default Hero;