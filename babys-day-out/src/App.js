import './App.css';

import React from "react";

class App extends React.Component {
  render() {
    return (
      <body>
        <header>
        <h1>Welcome to Your Homepage</h1>
        </header>

        <main>
          <section>
              <h2>About Us</h2>
              <p>This is the homepage of our website. Feel free to explore and learn more about us!</p>
          </section>

          <section>
              <h2>Services</h2>
              <ul>
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
              </ul>
          </section>
        </main>

        <footer>
            <p>&copy; 2024 Your Homepage. All rights reserved.</p>
        </footer>
      </body> 
    );
  }
}

export default App;
