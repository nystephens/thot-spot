# Thot Spot

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
This is a RESTful API to be used as a back end for a social networking website.  It is an Express.js API and is configured to using MongoDB and mongoose to interact with a NoSQL database.  A user is able to Create, Read, Update, and Delete (CRUD) entries in the database for users and thoughts.  The user is also able to add and delete friends to thier profile by using an associating friendId field. Additionally, the user is able to add and delete reactions to thoughts to thier profile by using an associating reactionId field.  This information can be integrated fully into the front end of a social networking website or application so that these changes and requests can be made on the client side.  

## Installation
1.  Navigate to the GitHub repository ( https://github.com/nystephens/thot-spot ) in your web browser and click the green dropdown menu that says “Code”.  Copy the SSH key to your clipboard and then open your terminal.  

2.  In your terminal navigate to the directory you wish to house this repository.   

3.  Type “git clone” into your command line and paste the SSH key you copied from the repository, then hit Enter.  A new file titled “thot-spot” containing the necessary files will appear in your chosen directory.  Due to file size, Node.js and is necessary  modules will not be cloned to your repository.

4.  Since this application uses Node.js you will have to install Node and the required Node modules to operate it.  For detailed instructions on how  to install Node.js to your computer please visit: https://www.guru99.com/download-install-node-js.html  

5.  Once Node is successfully installed on your computer, navigate to the index.js file in your terminal.  For quick access you can right click server.js in VS Code and click the option “Open in Integrated Terminal”. 

6.  Type the following command to install the proper node modules: “npm install”.  

7.  Check your newly downloaded “node_modules” folder to ensure that the correct packages have been installed.  The dependencies that are not included within the general Node module package are "express": "^4.17.1" and "mongoose": "^5.12.3".  If these packages are not present within your Node modules then run the command “npm install dotenv express mysql2 sequelize” to install them.  

8.  This application used MongoDB to store Json documents and data.  To download the free version of MongoDB please click this link and follow the instructions to download MongoDB Atlas: [download Mongo DB Altlas](https://docs.mongodb.com/manual/installation/)

9.  To easily test the API and query for results you can use the application Insomnia Core.  Insomnia Core will allow you to easily create routes with the proper endpoints and test CRUD operations.  To download and install Insomnia Core visit [download Insomnia Core](https://insomnia.rest/download).  Otherwise you can navigate to http://localhost:3001/api/<\enter your desired endpoint> once you have started the server with the command "npm start".

    For instance the url http://localhost:3001/api/users will return all user information.

10.  Once you have cloned the repository, downloaded Node.js and its necessary modules, and installed Insomnia Core you are ready to use the Thot Spot API!  

## Usage
To use this API it is recommended to download Insomnia Core.  Additionally, it is required that you use MongoDB to create and access your NoSQL database.  See [Installation](#installation) for instructions on how to download these programs. Once these programs and the required Node modules are installed you will be able to perform your CRUD operations in Insomnia.  

For info on how to run these operations see [Using Insomnia](https://apis.support.brightcove.com/general/use-insomnia-api-requests.html).  When you run these different requests you should see the expected values for each request as defined by the models.

To see this application in action please watch [Walkthrough Video: User Operations](https://drive.google.com/file/d/1IWE3H57X1GuR4jt1wZG44IghfFpWLjaU/view), [Walkthrough Video: Friend Operations](https://drive.google.com/file/d/1DGat36pF5wopgPRJke-xFlkkErMJd6hV/view), [Walkthrough Video: Thought Operations](https://drive.google.com/file/d/1wVAKVc92-UGL91z1BggrMfWGgcnngOKu/view), and [Walkthrough Video: Reaction Operations](https://drive.google.com/file/d/1Kkv_BMUGvXbkDzt4e2FtDf2Q9Yk9iNbK/view).

## License
![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)
[MIT license](https://opensource.org/licenses/MIT)
Copyright 2021 Nate Stephens

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing
If you would like to contribute to this project please contact me at the github link below.  I would love to expand this application and use it in a social media site by creating an interactive front end that brings the full experience of sharing thoughts online to users.  

## Tests
To test this application see the [Usage](#usage) section for details on how to preform CRUD operations in Insomnia Core.  By purposely entering incorrect or missing values in your request you should recieve error messages corresponding to that invalid request.  By entering valid information into your request body or url parameters you should recieve expected information corresponding with your request.  Trying different types of values within different CRUD operations should result in either and error or a valid result with appropriate JSON response.  

## Questions
For questions or concerns regarding this project or future collaborations please contact the author via GitHub at:
https://github.com/nystephens
