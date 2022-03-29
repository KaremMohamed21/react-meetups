import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import "./Nav.css";

function Nav() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className='header'>
      <div className='logo'>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'> All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meetup</Link>
          </li>
          <li>
            <Link to='/favorite'>
              Favorites
              <span className='badge'>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
