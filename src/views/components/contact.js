import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div id="contact" className="w-screen py-20">
                <div>
                <h2>Contact Us</h2>
                <form action="#" method="post">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required></input>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <input type="submit" value="Submit"></input>
                </form>
                </div>
            </div>
            
        )
    }
}

export default Contact;