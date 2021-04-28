// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import * as restaurantActions from "./store/restaurants"
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"
import Restaurants from "./components/Restaurants"
import RestaurantDetails from "./components/RestaurantDetails"

function App() {
  const restaurants = useSelector((state) => state.restaurants)
  const [searchTerm, setSearchTerm ]= useState("")



  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(restaurantActions.fetchRestaurants())
  }, [dispatch])

  return (
    <>
      <Navigation searchTerm={searchTerm} setSearchTerm={setSearchTerm} isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Restaurants searchTerm={searchTerm} restaurants={restaurants} />
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

export default App;
