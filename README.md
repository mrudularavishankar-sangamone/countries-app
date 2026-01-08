# Displaying Country Names and Flags
This React.js application displays the names and flags of all countries in the world.

## Technologies Used:
ReactJS - UI framework and interactivity
HTML - Markup structure
CSS - Styling

### Setup/Installation
Prerequisites:
  Node.js (v14 or higher) and npm installed on your machine
  Git (to clone the repository)

### Steps:
1. Verify if npm is installed in your device/workspace(for Windows)
    - Before running the project, ensure that npm is installed on your system.
    - Open the Terminal in VSCode.
    - Run the following command:
      ```
      npm -v
      ```
      If you see a version number (e.g., 10.4.1), npm is installed. If you see an error like: 'npm' is not recognized as an internal or external command, then npm is not installed.
  
2. Installing npm:
    - Download Node.js from 'https://nodejs.org/'.
    - Install Node.js by running the installer and follow the prompts.
    - Verify the installation by running the command in terminal npm -v

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

7. Grouping the jsx files
    - Create a folder called pages under src
    - Create a file called pages/Page1.jsx
    - Add the ```export default function Page1(){ }``` statement
    - 