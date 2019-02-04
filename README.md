## MyReadingList
### A node &amp; mysql MVC/ORM application 

## About
My Reading List aka The Reading Rover is a simple mysql and node based application. The premise is an app that allows the user to enter text (in this instance a book title) and that text goes to the left side of the page.  These are books that are yet to be read.  Once the user has read the book, they press the "READ IT" button next to the book and it moves to the right hand side of the page.  This allows the user to note how many books they have read.   If at any time the user would like to delete the book, they can once the book is on the right hand side of the page by pressing the delete button. 

###Intital Look without Database information
![alt text](https://raw.githubusercontent.com/Samareimorgan/MyReadingList/blob/master/public/assets/images/addabook.JPG"Search Bar Photo") 

### Image of Web App after entering a few books
![alt text](https://raw.githubusercontent.com/Samareimorgan/MyReadingList/blob/master/public/assets/images/booksadded.JPG"Book titles added to left side") 

### Image of Web App after reading a few books
![alt text](https://github.com/Samareimorgan/MyReadingList/blob/master/public/assets/images/readabook.JPG"Book titles added to right side after completed") 


### Image of Web App after deleting a book
![alt text](https://raw.githubusercontent.com/Samareimorgan/MyReadingList/blob/master/public/assets/images/deleteabook.JPG "Book titles removed from right side after deletion") 




## Install
#### Dependencies:  Express, express-handlebars, handlebars, mysql, mysql2, jquery
1. Ensure node.js is installed on your computer
2. Clone the git repository to your computer
3. Once you clone the repository to your computer, cd into your repository
4. npm install, which will install all the needed node modules
5. Once the modules are installed, you will want to utilize your MySql Workbench, or Sequel Pro to create a local database. 
6.  Change the local database information into the connection.js file
7. Open the Schema and Seeds in your MySql Workbench or Sequel Pro and excute them.  This will ensure the database has been created
8. Once created you can go back to your git bash command line and enter node server.js
9. This will start the server in the local host. 
10. Go to your browser and enter the local host information.  The Web App will come up



## Credits
Created by Samarei Morgan.   Thanks to the University of Denver Coding Bootcamp Instructor Terra Taylor and  Teaching Assistants: Jacq, Evan, and Dillion.

## License
MIT
