import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div id="contact" className="w-screen h-screen bg-pastel-green snap-start shrink-0 snap-always pb-48">
                <div className="h-full w-full pt-24">
                    <h1 className="text-7xl text-center pb-8 text-olive-green drop-shadow-xl">Contact Us</h1>
                    <div className="bg-white w-1/2 h-3/4 p-10 m-auto mt-16
                                    rounded-lg">
                        <form action="#" method="post">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required
                                   className="px-3 py-1 mx-2 rounded-lg border-slate-300"></input>

                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required></input>

                            <label for="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>

                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Contact;