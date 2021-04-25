# jwt_auth_project
  Welp is a fullstack front-end to back-end project.  It is a clone of the Yelp website which shows businesses and business details.  Welp enables a user to see a list of restaurants and view detailed information about the restaurant, and it's reviews 

* Live Link Address:  https://solo-project-yelpclone.herokuapp.com/
* Project Github: https://github.com/earlwoo/jwt_auth_project
     


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

![SoloYelpDataSchema](https://user-images.githubusercontent.com/73197963/115982309-0ee4f580-a568-11eb-8dbd-03e53f6fabf1.JPG)

## Technical Showcase

TBD
```javascript

```
TBD
```javascript

```
TBD

```javascript

```
TBD
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
