import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FavoritesContextProvider } from "../store/favorites-context";

import AllMeetupsPage from "../pages/AllMeetupsPage";
import NewMeetupPage from "../pages/NewMeetupPage";
import FavoritesPage from "../pages/FavoritesPage";
import Nav from "../components/layout/Nav";

function AppRouter() {
  return (
    <FavoritesContextProvider>
      <Router>
        <Nav />
        <main className='main'>
          <Switch>
            <Route path='/' exact component={AllMeetupsPage} />
            <Route path='/new-meetup' exact component={NewMeetupPage} />
            <Route path='/favorite' exact component={FavoritesPage} />
          </Switch>
        </main>
      </Router>
    </FavoritesContextProvider>
  );
}

export default AppRouter;
