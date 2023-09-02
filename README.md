# Library admin app
This repository contains a sample react-admin application along with a JSON Server for mocking a backend API. 

#### Book Management System
The book management application features the following key functionalities:

- Book Management:
    - List Books: Display a paginated list of all books with their details, including title, author, and publication year.
    - Create Book: Allow the creation of new books by providing information such as title, author, and publication year.
    - Edit Book: Enable the modification of details for an existing book, such as title, author, and publication year.
    - Delete Book: Allow the removal of a book from the database.

- Author Management:
    - List Authors: Show a list of all authors with their details, including name, year of birth, and nationality.
    - Create Author: Permit the creation of new authors by providing information such as name, year of birth, and nationality.
    - Edit Author: Enable the modification of details for an existing author, such as name, year of birth, and nationality.
    - Delete Author: Allow the removal of an author from the database.

This system provides an efficient platform for managing information about books and authors, simplifying the organization and administration of a library or a book collection. With these features, users can maintain a detailed record of books and their authors and perform actions such as adding, editing, and deleting records as needed. Streamline your library management with our book management application!

Follow the instructions below to set up and run the app.

## Prerequisites
Before you start, ensure you have the following prerequisites installed on your system:
- Node.js and npm (Node Package Manager)
- Git (optional, for cloning the repository)

## Installation
1. Clone this repository to your local machine (or download the ZIP file and extract it):
```bash
git clone https://github.com/alejocano22/library-admin.git
```

2. Navigate to the project directory:
```bash
cd library-admin
```

3. Install the application dependencies by running:
```bash
npm install
```

### Running JSON Server
4. Start the JSON Server with a mock database:
```bash
npm run json-server
```
This will launch the JSON Server at http://localhost:3000 by default, serving your mocked data.
Mock database is in the following file src/db/db.json

### Running the React-Admin App
5. Start the React-Admin app:
```bash
npm run dev
```
This will start the development server for your React-Admin app at http://localhost:5173 by default.

6. Open your web browser and visit http://localhost:5173 to access the React-Admin application.
You can now use the React-Admin app to interact with the data provided by the JSON Server.

#### Additional Information
The JSON Server runs on port 3000 by default, and the React-Admin app runs on port 5173 by default. You can change these ports in the respective configuration files if needed.
Enjoy using your React-Admin app with JSON Server! If you have any questions or encounter issues, feel free to reach out for assistance.

## Test
1. In the project directory, you can run Jest tests using the following command:
```bash
npm test
```
This command will execute all test files in your project using Jest.

2. Jest will run the tests, and you will see the test results displayed in your terminal.

3. If any tests fail, Jest will provide details about which tests failed and why.

4. If all tests pass, you will see a summary of the test run.

#### Project Enhancements

As our book management project continues to evolve, we are committed to implementing significant improvements to provide an even better experience for our users. Here are some of the enhancements we have planned or implemented in the project:
- Enhanced User Interface: Intuitive and appealing user interface to make navigation and application usage easier
- Advanced Search: We implemented an advanced search feature that allows users to efficiently search for books and authors using specific criteria
- Data Export: Users are able to export book and author data in common formats such as CSV or Excel for use outside the application.


# What is next? 
- User Authentication: We will add user authentication functionality to ensure data security and enable users to have personalized profiles.
- Comments and Reviews: We will enable users to rate and comment on books, providing additional insights into the quality of the works.
- Performance Improvements: We will continue to optimize the application's performance to make it faster and more responsive, even with larger datasets.
- Internationalization: We will add support for multiple languages to make the application accessible to a global audience.
- Integration with External Sources: We will enable the import of data from external sources, such as public library catalogs or databases of recognized authors.

These enhancements reflect our commitment to quality and continuous improvement in our book management project. We are excited about the future and providing an even more enriching experience for our users. Stay tuned for these exciting updates!
