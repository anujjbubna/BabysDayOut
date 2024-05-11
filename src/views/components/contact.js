import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div id="contact" className="w-screen h-screen bg-pastel-green snap-start shrink-0 snap-always pb-48">
                <div className="h-full w-full pt-24">
                    <h1 className="text-7xl text-center pb-8 text-olive-green drop-shadow-xl">Contact Us</h1>
                    <div className=" bg-gray-50 w-1/2 h-3/4 p-10 m-auto mt-16
                                    rounded-lg drop-shadow-xl">
                        <div className="grid grid-cols-2 m-auto w-1/2 mt-8 text-center">
                            <div className="grid grid-rows-2 m-auto w-4/5 justify-items-center">
                                <label for="fname" className="w-full my-1 font-medium">First Name</label>
                                <input className="rounded-md w-5/6 mb-1 px-2 py-1 text-sm text-center shadow-lg
                                                                border-olive-green border-solid border-2"
                                    type="text" id="fname" name="fname"
                                    placeholder="First name">
                                </input>
                                {/* add input reference and create js script */}
                            </div>
                            <div className="grid grid-rows-2 m-auto w-4/5 justify-items-center">
                                <label for="lname" className="w-full my-1 font-medium">Last Name</label>
                                <input className="rounded-md w-5/6 mb-1 px-2 py-1 text-sm text-center shadow-lg
                                                                border-olive-green border-solid border-2"
                                    type="text" id="lname" name="lname"
                                    placeholder="Last name">
                                </input>
                            </div>
                        </div>
                        <div className="m-auto w-1/2 grid grid-rows-2 justify-items-center mt-4">
                            <label for="email" className="w-full my-1 font-medium text-center">Email address</label>
                            <input className="rounded-md w-5/6 mb-1 px-2 py-1 text-sm text-center shadow-lg
                                                                border-olive-green border-solid border-2"
                                type="email" id="email" name="email"
                                placeholder="Email">
                            </input>
                            {/* check for email input only */}
                        </div>
                        <div className="m-auto w-1/2 grid grid-flow-row auto-rows-auto justify-items-center mt-4">
                            <label for="query" className="w-4/5 mt-1 mb-2 font-medium text-center">Your Query:</label>
                            <textarea className="rounded-md w-5/6 h-24 mb-1 px-2 py-1 text-sm shadow-lg resize-none
                                                                border-olive-green border-solid border-2"
                                type="text" id="query" name="query"
                                placeholder="Ask us your questions..."> 
                            </textarea>
                            {/* limit the query to 60 words */}
                        </div>
                        <div className="w-16 m-auto bg-olive-green mt-10 text-white rounded-md px-1 text-center">
                            Submit
                        </div>
                        {/* <form className="pt-10 m-auto w-1/3 space-y-8" action="#" method="post">
                            <label className="" for="name">Name:</label>
                            <input type="text" id="name" name="name" required
                                className="pl-3 py-1 mx-2 rounded-lg border-slate-300"></input>
                            <br></br>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required
                                className="pl-3 py-1 mx-2 rounded-lg border-slate-300"></input>
                            <br></br>
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" required
                                className="pl-3 py-1 mx-2 rounded-lg border-slate-300"></textarea>
                            <br></br>
                            <input type="submit" value="Submit"></input>
                        </form> */}
                    </div>
                    <div className="flex justify-center w-3/10 pt-16
                                     text-xl hover:text-2xl hover:ease-in-out duration-300">
                        <p className="float-left pl-4 py-1 text-olive-green font-medium drop-shadow-xl">Interested parents and caregivers, waitlist today!</p>
                        <a href="https://shorturl.at/lpzX1" target="_blank"><button className="bg-olive-green float-right px-3 ml-4 py-1
                                        rounded drop-shadow-xl text-white">
                            Register
                        </button></a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Contact;