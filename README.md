# Welp
  Welp is a fullstack front-end to back-end project.  It is a clone of the Yelp website which shows businesses and business details.  Welp enables a user to see a list of restaurants and view detailed information about the restaurant, and it's user reviews.
  
![welpHome](https://user-images.githubusercontent.com/73197963/116771320-5fe96380-aa18-11eb-8222-243087b825ea.PNG)
![welpRestDetail](https://user-images.githubusercontent.com/73197963/116771346-b060c100-aa18-11eb-8ce5-973a2d21b845.PNG)

* Live Link Address:  https://welp-yelp.herokuapp.com/
* Project Github: https://github.com/earlwoo/welp
     

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
  * Yelp API
  
## DATABASE SCHEMA

![welpDatabaseNew](https://user-images.githubusercontent.com/73197963/116771017-13048d80-aa16-11eb-99f8-c2fe0b4c2bac.PNG)

## Technical Showcase

Making as few as possible requests to the database for expensive fetch calls.  The store is updated at components that need the data.  Data is either passed as a prop for immediate children components, but other components will otherwise subscribe to the state to have access to data.
```javascript
   function App() {
    const restaurants = useSelector((state) => state.restaurants)
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    useEffect(() => {
      dispatch(restaurantActions.fetchRestaurants())
    }, [dispatch])

    useEffect(() => {
      dispatch(userActions.getUsers())
    }, [dispatch])

    return (
      <>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <ResaurantsPhoto />
              <Restaurants restaurants={restaurants}/>
            </Route>
            <Route path="/:restId">
              <RestaurantDetails restaurants={restaurants} />
            </Route>
          </Switch>
        )}
        <Footer />
      </>
    );
  }
```
Search function does not make an API call, but rather queries through the store, which allows real time results while not making an expensive database fetch.
```javascript
  if(searchTerm) {
          for (let key in restaurants) {
              if (restaurants[key].name.toLowerCase().includes(searchTerm.toLowerCase()) && !searchSet.has(key)) {
                  searchSet.add(restaurants[key])
              }

              restaurants[key].categories.forEach(category => {
                  if(category.toLowerCase() === searchTerm.toLowerCase() && !(searchSet.has(key))) {
                      searchSet.add(restaurants[key])
                      // searchArr.push()
                  }
              })

          }
      }
```
Both react props and the redux store is used to interchange and match data, instead of making fetch calls to the database to query for desired result

```javascript
  const ReviewSlot = ({ review }) => {

    const users = useSelector(state => state.users)

    const { title, userId, content, rating, updatedAt } = review

    let reviewDate = updatedAt.split('T')[0].split('-')
    const [year, month, day] = reviewDate

    const reviewUser = users[userId]
```


## TABLE USERS
  * id (integer, primary key, not null)
  * username (string, unique, not null)
  * firstName (string, not null)
  * lastName (string, not null)
  * email (string, unique, not null)
  * hashedPassword (string, not null)
  * city (string)
  * state (string)
  * avatar (string)
  * created_at (dateTime, not null)
  * updated_at (dateTime, not null)
## TABLE RESTAURANTS
  * id (integer, primary key)
  * name (string, not null)
  * imageUrl (string, not null)
  * photos (text)
  * transactions (array)
  * categories (text, not null)
  * rating (integer)
  * price (string)
  * location (text, not null)
  * coordinates (text)
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
   * get all users (GET)
  ### RESTAURANTS
   * get all restaurants (GET)
  ### REVIEWS
   * get all tassk (GET)
   * get specific task (GET)
   * create new review (POST)
   * update review (PUT)
   * delete review (DELETE)

## PROJECT CHALLENGES
    * Figuring out how to make the least amount of calls to the database and utilizing the redux state for data
    * Deciding which components have access to which slice of state and how to make the data accessible to other components by either props, or subscribing to the store
    * The re-rendering nature of React, and understanding how those re-renders affect the entire components structure, while also being mindful of what causes the re-render
    

## ENVIORNMENT DEPENDENCIES/INSTALLATION
   * Bcryptjs
   * faker.js
   * Cookie parser
   * Csurf
   * Express
   * Heroku
