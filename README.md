# Displaying Country Names and Flags
This React.js application displays the names and flags of all countries in the world.

## Technologies Used:
- ReactJS - UI framework and interactivity
- HTML - Markup structure
- CSS - Styling

## Setup/Installation

### Prerequisites:
- Node.js (v14 or higher) and npm installed on your machine.
- Git (to clone the repository).

### Steps:
1. Verify if npm is installed in your device/workspace(for Windows)
    - Before running the project, ensure that npm is installed on your system.
    - Open the Terminal in VSCode.
    - Run the following command:
      ```
      npm -v
      ```
    - If a version number is displayed (for example, 10.4.1), npm is already installed. You can skip Step 2.
    - If you see an error such as: ```'npm' is not recognized as an internal or external command```, then npm is not installed. Proceed to Step 2
  
2. Installing npm:
    - Download Node.js from 'https://nodejs.org/'.
    - Install Node.js by running the installer and follow the prompts.
    - Verify the installation by running the ```npm -v``` command in terminal. 

3. Install the React package and its dependencies:
    ```
    npx create-react-app <app-name>
    ```
    P.S: The AppName should only contain lowercase alphabets

4. Changing the directory to the
    ```
    cd <app-name>
    ```

5. Start the development server:
    ```
    npm start
    ```
    The app will open in your browser at http://localhost:3000

6. Modify App.js file:
    - Delete the logo.svg import statement
    - Delete all the lines of code between the return() in App function
    - Add the following statements in the return()
      ```
      <div>
        <h1>List of Countries</h1>
      </div>
      ```
    - Verify the output at http://localhost:3000. Now, the React Application is ready.

7. Grouping the jsx file:
    - Create a folder called pages under src
    - Create a file called pages/Page1.jsx
    - Create a varible called API_URL and assign the Countries API URL to it.
      ```
      const API_URL = 'https://restcountries.com/v3.1/all?fields=name,flags';
      ```
    - Add the ```export default function Page1(){ }``` statement
    - Add the following code inside the Page1() function:
      ```
      return (
        <p> This Page has the logic </p>
      );
      ```
  
8. Including Page1.jsx reference in App.js:
    - Add ```import Page1 from './pages/Page1.jsx'``` statement
    - Add React tag within the return() so that the contents of Page1.jsx shows up on the screen.
      ```
      return(
        <div>
          <h1>List of Countries</h1>
          <Page1 />
        </div>
      );
      ```
    - Verify the output at http://localhost:3000.

9. Including the Logic:
    - In Page1.jsx file, add useEffect() in order to automatically run the fetchCountries() when the page appears or when something changes, i.e., when dependency array, the 2nd argument, changes/has values:
      ```
      useEffect(function() {
        fetchCountries();
      }, []);
      ```
    - Import the useEffect in-built function from React:
      ```
      import { useEffect } from 'react';
      ```
    - Add the following code to create an array to store the list of countries, which automatically updates the UI whenever the array changes.
      ```
      const [countries, setCountries] = useState([]);
      ```
    - Import the useState in-built function from React:
      ```
      import { useState } from 'react';
      ```
    - Write the logic for fetchCountries() function to fetch the contents of the URL from Step7.3:
      ```
      async function fetchCountries() {
        try {
          const response = await fetch(API_URL);
          const data = await response.json();

          if(data) {
            setCountries(data);
          }
        } catch(error) {
          console.log(error);
        }
      }
      ```

10. Displaying all the country names that was fetched from the API_URL.
    - Add the following line of code to display the country names:
      ```
      function renderCountries(countries) {
        const countryElements = [];
        for (let i = 0; i < countries.length; i++) {
          const country = countries[i];
          countryElements.push(
            <div key={country.name.official}>
              <h2>{country.name.common}</h2>
            </div>
          );
        }
        return countryElements;
      }
    
      return (
        <div>
          {renderCountries(countries)} 
        </div>
      );
      ```
    - Verify the output at http://localhost:3000.

11. Displaying all the country flags along with names that was fetched from the API_URL.
    - Add the following lines of code after h2 tag to renderCountries() function:
      ```
      <img 
        src = {country.flags.png}
        //{ Alt attribute is added for accessibility and to satisfy ESLint jsx-a11y requirements }
        alt = {country.flags.alt} 
      />

      {/* Horizontal line to separate country entries */}
      <hr />
      ```
    - Verify the output at http://localhost:3000.