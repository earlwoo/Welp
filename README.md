# jwt_auth_project
  Welp is a fullstack front-end to back-end project.  It is a clone of the Yelp website which shows businesses and business details.  Welp enables a user to see a list of restaurants and view detailed information about the restaurant, and it's reviews 


## MVP
  * Ability to create new users and have user login with authorization
  * Ability to login as a demo user with access to website
  * Users can create, update, delete a review unique to the user and restaurant 
  * Users can view a business page with reviews 
  * Users can search through all restaurants

## BONUS / STRETCH GOALS
  * A better detailed search
  * Profile page for user
  
## TECHNOLOGIES USED
  * Javascript
  * Express
  * Sequelize
  * PSQL Database
  * CSS
  * JSX
  * React
  * Redux
  
## DATABASE SCHEMA



## Technical Showcase

All of the information to display for a user is aquired, then displayed without requiring a reload to the web-page.  The information is fetched asynchronously, then used to render HTML to the user's homepage to smoothly present all information a user could have access to.
```javascript

```
Rendering the information without requiring a page reload means we cannot simply set event handlers for elements grabbed after the DOM content was loaded, since they could possibly be replaced or be missing from the page at a later time.  Since we cannot place event listeners on html elements rendered in the future, we used event capturing to work around this issue, and made a capture event (opposite of bubbling) on html elements that would not be manipulated by AJAX throughout the user's interaction with the site.
```javascript

```
A robust search feature that is able to filter through all the user's task through a term to include, exclude, and also the option to search through other properties of a task, not just it's name

```javascript

```
Simple, clean, and modern styling features such as subtle color changes, hover effects, and menu transitions makes the webpage engaging, while keeping it clutter free to focus on the functionality of the webpage/tool.

```CSS

```

## TABLE USERS
  * id (integer, primary key, not null)
  * username (string, unique, not null)
  * firstName (string, not null)
  * lastName (string, not null)
  * email (string, unique, not null)
  * hashedPassword (string, not null)
  * created_at (dateTime, not null)
  * updated_at (dateTime, not null)
## TABLE RESTAURANTS
  * id (integer, primary key)
  * name (string, not null)
  * imageUrl (string, not null)
  * url (string, not null)
  * transactions (array)
  * categories (text, not null)
  * rating (integer)
  * price (string)
  * location (text, not null)
  * phoneNum (string, not null)
  * created_at (dateTime, not null)
  * updated_at (dateTime, not null)
## TABLE REVIEWS
  * id (integer, primary key, not null)
  * title (string, not null)
  * userId (integer, not null, foreign key)
  * restId (integer, not null, foreign key)
  * content (text, not null)
  * rating (integer, not null)
  * created_at (dateTime, not null)
  * updated_at (dateTime, not null)

## BACKEND ROUTES    
  ### USERS
   * sign-up user (GET & POST)
  ### RESTAURANTS
   * get all restaurants (GET)
  ### REVIEWS
   * get all tassk (GET)
   * get specific task (GET)
   * create new review (POST)
   * update review (PUT)
   * delete review (DELETE)

## ENVIORNMENT DEPENDENCIES/INSTALLATION
   * Bcryptjs
   * Cookie parser
   * Csurf
   * Express
   * Heroku
